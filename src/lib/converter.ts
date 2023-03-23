import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import _ from 'lodash';

import {
  ActionNodeSchema,
  ActionNodeType,
  CardNodeSchema,
  CardNodeType,
  HandNodeSchema,
  HandNodeType,
  PositionNodeSchema,
  PositionNodeType,
  StreetNodeSchema,
  StreetNodeType,
} from '@/types/schema';

export const handNodeConverter: FirestoreDataConverter<Omit<HandNodeType, 'child'>> = {
  toFirestore(handNode: HandNodeType): DocumentData {
    const childDeletedData = _.omit(handNode, ['child']);
    const sendData: Omit<HandNodeType, 'child'> = {
      ...childDeletedData,
      updatedAt: Date.now(),
    };
    return sendData;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Omit<HandNodeType, 'child'> {
    const data = HandNodeSchema.parse(snapshot.data(options));
    return {
      id: snapshot.id,
      ...data,
    };
  },
};

export const streetNodeConverter: FirestoreDataConverter<Omit<StreetNodeType, 'child'>> = {
  toFirestore(streetNode: StreetNodeType): DocumentData {
    const childDeletedData = _.omit(streetNode, ['child']);
    return childDeletedData;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Omit<StreetNodeType, 'child'> {
    const data = StreetNodeSchema.parse(snapshot.data(options));
    return {
      id: snapshot.id,
      ...data,
    };
  },
};

export const cardNodeConverter: FirestoreDataConverter<Omit<CardNodeType, 'child'>> = {
  toFirestore(cardNode: CardNodeType): DocumentData {
    const childDeletedData = _.omit(cardNode, ['child']);
    return childDeletedData;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Omit<CardNodeType, 'child'> {
    const data = CardNodeSchema.parse(snapshot.data(options));
    return {
      id: snapshot.id,
      ...data,
    };
  },
};

export const positionNodeConverter: FirestoreDataConverter<Omit<PositionNodeType, 'child'>> = {
  toFirestore(positionNode: PositionNodeType): DocumentData {
    const childDeletedData = _.omit(positionNode, ['child']);
    return childDeletedData;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Omit<PositionNodeType, 'child'> {
    const data = PositionNodeSchema.parse(snapshot.data(options));
    return {
      id: snapshot.id,
      ...data,
    };
  },
};

export const actionNodeConverter: FirestoreDataConverter<Omit<ActionNodeType, 'child'>> = {
  toFirestore(actionNode: ActionNodeType): DocumentData {
    const childDeletedData = _.omit(actionNode, ['child']);
    return childDeletedData;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Omit<ActionNodeType, 'child'> {
    const data = ActionNodeSchema.parse(snapshot.data(options));
    return {
      id: snapshot.id,
      ...data,
    };
  },
};
