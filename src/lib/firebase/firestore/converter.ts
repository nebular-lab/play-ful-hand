import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import produce from 'immer';
import _ from 'lodash';

import { defaultHandNode } from '@/defaultData/deaultHandNode';
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

import { convertArrayToObject, convertObjectToArray } from './handRangeConverter';

export const handNodeConverter: FirestoreDataConverter<Omit<HandNodeType, 'child'>> = {
  toFirestore(handNode: HandNodeType): DocumentData {
    const childDeletedData = _.omit(handNode, ['child']);
    //TODO convertArrayToObjectは純粋関数だが、objectを渡すのは怖い
    const OOPHandRangeObj = convertArrayToObject(handNode.preflopHandRange.OOP);
    const IPHandRangeObj = convertArrayToObject(handNode.preflopHandRange.IP);
    const sendData = {
      ...childDeletedData,
      preflopHandRange: { OOP: OOPHandRangeObj, IP: IPHandRangeObj },
      updatedAt: Date.now(),
    };
    return sendData;
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Omit<HandNodeType, 'child'> {
    const handNodeObj = produce(snapshot.data(options), (draftState) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      draftState.preflopHandRange.OOP = convertObjectToArray(draftState.preflopHandRange.OOP);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      draftState.preflopHandRange.IP = convertObjectToArray(draftState.preflopHandRange.IP);
    });
    const result = HandNodeSchema.safeParse(handNodeObj);

    const data = result.success ? result.data : _.omit(defaultHandNode, ['child']);
    return {
      ...data,
      id: snapshot.id,
    };
  },
};

export const streetNodeConverter: FirestoreDataConverter<Omit<StreetNodeType, 'child'>> = {
  toFirestore(streetNode: StreetNodeType): DocumentData {
    const OOPHandRangeObj = convertArrayToObject(streetNode.handRange.OOP);
    const IPHandRangeObj = convertArrayToObject(streetNode.handRange.IP);
    const childDeletedData = _.omit(streetNode, ['child']);
    return { ...childDeletedData, handRange: { OOP: OOPHandRangeObj, IP: IPHandRangeObj } };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Omit<StreetNodeType, 'child'> {
    const streetNodeObg = produce(snapshot.data(options), (draftState) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      draftState.handRange.OOP = convertObjectToArray(draftState.handRange.OOP);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      draftState.handRange.IP = convertObjectToArray(draftState.handRange.IP);
    });
    const data = StreetNodeSchema.parse(streetNodeObg);
    return {
      ...data,
      id: snapshot.id,
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
      ...data,
      id: snapshot.id,
    };
  },
};

export const positionNodeConverter: FirestoreDataConverter<Omit<PositionNodeType, 'child'>> = {
  toFirestore(positionNode: PositionNodeType): DocumentData {
    const OOPHandRangeObj = convertArrayToObject(positionNode.handRange.OOP);
    const IPHandRangeObj = convertArrayToObject(positionNode.handRange.IP);
    const childDeletedData = _.omit(positionNode, ['child']);
    return { ...childDeletedData, handRange: { OOP: OOPHandRangeObj, IP: IPHandRangeObj } };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Omit<PositionNodeType, 'child'> {
    const positionNodeObj = produce(snapshot.data(options), (draftState) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      draftState.handRange.OOP = convertObjectToArray(draftState.handRange.OOP);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      draftState.handRange.IP = convertObjectToArray(draftState.handRange.IP);
    });
    const data = PositionNodeSchema.parse(positionNodeObj);
    return {
      ...data,
      id: snapshot.id,
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
      ...data,
      id: snapshot.id,
    };
  },
};
