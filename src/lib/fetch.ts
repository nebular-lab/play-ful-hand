import { collectionGroup, getDocs, query, where } from 'firebase/firestore';

import { firestore } from './firebase/client';

export const fetchHandTree = async () => {
  // const docRef = doc(firestore, 'tree', '222');
  // const docSnap = await getDoc(docRef);
  // const data = docSnap.data();
  // const parsedData = testSchema.parse(data);
  // return parsedData;
  // const handTree: HandNodeType = { id: document.id, flopNode: fetchStreetNode(document.id) };
};

// export const fetchHandTreeFromServer = async (handTreeId: string) => {
//   const docRef = adminDB.collection('tree').doc('222');
//   const docSnap = await docRef.get();
//   const data = docSnap.data();
//   console.log(data);
//   const parsedData = testSchema.parse(data);
//   return parsedData;
//   // const handTree: HandNodeType = { id: document.id, flopNode: fetchStreetNode(document.id) };
// };

const fetchStreetNode = async (documentID: string) => {
  const docRef = query(collectionGroup(firestore, 'streetNode'), where('id', '==', documentID));
  const documentList = await getDocs(docRef);
  const document = documentList.docs[0];
};
