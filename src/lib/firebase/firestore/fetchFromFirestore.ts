import {
  collection,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore';

import {
  ActionNodeType,
  CardNodeType,
  HandNodeType,
  PositionNodeType,
  StreetNodeType,
} from '@/types/schema';

import { firestore } from '../init/client';
import {
  actionNodeConverter,
  cardNodeConverter,
  handNodeConverter,
  positionNodeConverter,
  streetNodeConverter,
} from './converter';

//dashboardに表示する用
export const fetchHandNodesSnapshot = async (
  lim: number,
  nextCursor?: QueryDocumentSnapshot<Omit<HandNodeType, 'child'>>,
) => {
  const q = nextCursor
    ? query(collection(firestore, 'handNode'), startAfter(nextCursor), limit(lim)).withConverter(
        handNodeConverter,
      )
    : query(collection(firestore, 'handNode'), limit(lim)).withConverter(handNodeConverter);
  const querySnapshot = await getDocs(q);
  const handNodeDocDatas = querySnapshot.docs.map((doc) => doc.data());
  return { handNodeDocDatas, querySnapshot };
};

export const fetchHandNode = async (id: string) => {
  const documentRef = doc(firestore, 'handNode', id).withConverter(handNodeConverter);
  const querySnapshot = await getDoc(documentRef);
  if (!querySnapshot.exists()) throw new Error('handNode not found');
  const handNodeDocData = querySnapshot.data();
  const streetNodeData = await fetchStreetNode(querySnapshot.ref);
  const handNode: HandNodeType = { ...handNodeDocData, child: streetNodeData };
  return handNode;
};
const fetchStreetNode = async (ref: DocumentReference) => {
  const collectionRef = collection(ref, 'streetNode').withConverter(streetNodeConverter);
  const querySnapshot = await getDocs(collectionRef);
  if (querySnapshot.size == 0) return undefined;
  // 必ず一つだけなので、最初のものだけ取り出す
  const doc = querySnapshot.docs[0];
  const cardNodes = await fetchCardNodes(doc.ref);
  const streetNode: StreetNodeType = {
    ...doc.data(),
    child: cardNodes,
  };
  return streetNode;
};
const fetchCardNodes = async (ref: DocumentReference) => {
  const collectionRef = collection(ref, 'cardNode').withConverter(cardNodeConverter);
  const querySnapshot = await getDocs(collectionRef);
  if (querySnapshot.size == 0) return undefined;
  const cardNodes = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const cardData = doc.data();
      const positionNode = await fetchPositionNode(doc.ref);
      const cardNode: CardNodeType = {
        ...cardData,
        child: positionNode,
      };
      return cardNode;
    }),
  );
  return cardNodes;
};

const fetchPositionNode = async (ref: DocumentReference) => {
  const collectionRef = collection(ref, 'positionNode').withConverter(positionNodeConverter);
  const querySnapshot = await getDocs(collectionRef);
  if (querySnapshot.size == 0) return undefined;
  const positionData = querySnapshot.docs[0];
  const actionNodes = await fetchActionNodes(positionData.ref);
  const positionNode: PositionNodeType = {
    ...positionData.data(),
    child: actionNodes,
  };
  return positionNode;
};

const fetchActionNodes = async (ref: DocumentReference) => {
  const collectionRef = collection(ref, 'actionNode').withConverter(actionNodeConverter);
  const querySnapshot = await getDocs(collectionRef);
  if (querySnapshot.size == 0) return undefined;
  const actionNodes = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const actionData = doc.data();
      const streetNode = await fetchStreetNode(doc.ref);
      const positionNode = await fetchPositionNode(doc.ref);
      const childNode = streetNode || positionNode;
      const actionNode: ActionNodeType = {
        ...actionData,
        child: childNode,
      };
      return actionNode;
    }),
  );
  return actionNodes;
};
