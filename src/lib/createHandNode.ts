import { addDoc, collection, DocumentReference } from 'firebase/firestore';
import _ from 'lodash';

import {
  ActionNodeType,
  CardNodeType,
  HandNodeType,
  PositionNodeType,
  StreetNodeType,
} from '@/types/schema';

import {
  actionNodeConverter,
  cardNodeConverter,
  handNodeConverter,
  positionNodeConverter,
  streetNodeConverter,
} from './converter';
import { firestore } from './firebase/client';

export const createHandNode = async (handNode: Omit<HandNodeType, 'id'>) => {
  const docRef = await addDoc(
    collection(firestore, 'handNode').withConverter(handNodeConverter),
    _.omit(handNode, ['child']),
  );
  if (handNode.child) await createStreetNode(handNode.child, docRef);
};
const createStreetNode = async (streetNode: StreetNodeType, parentDocRef: DocumentReference) => {
  const docRef = await addDoc(
    collection(parentDocRef, 'streetNode').withConverter(streetNodeConverter),
    _.omit(streetNode, ['child']),
  );
  if (streetNode.child) {
    await Promise.all(
      streetNode.child.map(async (cardNode) => {
        await createCardNode(cardNode, docRef);
      }),
    );
  }
};
const createCardNode = async (cardNode: CardNodeType, parentDocRef: DocumentReference) => {
  const docRef = await addDoc(
    collection(parentDocRef, 'cardNode').withConverter(cardNodeConverter),
    _.omit(cardNode, ['child']),
  );
  if (cardNode.child) {
    await createPositionNode(cardNode.child, docRef);
  }
};
const createPositionNode = async (
  positionNode: PositionNodeType,
  parentDocRef: DocumentReference,
) => {
  const docRef = await addDoc(
    collection(parentDocRef, 'positionNode').withConverter(positionNodeConverter),
    _.omit(positionNode, ['child']),
  );
  if (positionNode.child) {
    await Promise.all(
      positionNode.child.map(async (actionNode) => {
        await createActionNode(actionNode, docRef);
      }),
    );
  }
};
const createActionNode = async (actionNode: ActionNodeType, parentDocRef: DocumentReference) => {
  const docRef = await addDoc(
    collection(parentDocRef, 'actionNode').withConverter(actionNodeConverter),
    _.omit(actionNode, ['child']),
  );
  if (actionNode.child) {
    if (actionNode.child.type == 'StreetNode') {
      await createStreetNode(actionNode.child, docRef);
    } else if (actionNode.child.type == 'PositionNode') {
      await createPositionNode(actionNode.child, docRef);
    }
  }
};
