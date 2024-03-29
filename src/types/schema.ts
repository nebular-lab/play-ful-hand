import { z } from 'zod';

export const CardMarkTypeSchema = z.union([
  z.literal('h'),
  z.literal('c'),
  z.literal('s'),
  z.literal('d'),
]);
export type CardMarkType = z.infer<typeof CardMarkTypeSchema>;

export const CardNumTypeSchema = z.union([
  z.literal('A'),
  z.literal('2'),
  z.literal('3'),
  z.literal('4'),
  z.literal('5'),
  z.literal('6'),
  z.literal('7'),
  z.literal('8'),
  z.literal('9'),
  z.literal('T'),
  z.literal('J'),
  z.literal('Q'),
  z.literal('K'),
]);
export type CardNumType = z.infer<typeof CardNumTypeSchema>;

export const CardTypeSchema = z.object({
  mark: CardMarkTypeSchema,
  num: CardNumTypeSchema,
});
export type CardType = z.infer<typeof CardTypeSchema>;

export const NumCardTypeSchema = z.object({
  num: z.number(),
  mark: z.number(),
});
export type NumCardType = z.infer<typeof NumCardTypeSchema>;

export const CardIndexSchema = z.object({
  col13: z.number(),
  col4: z.number(),
  row13: z.number(),
  row4: z.number(),
});
export type CardIndex = z.infer<typeof CardIndexSchema>;

export const PositionTypeSchema = z.union([z.literal('OOP'), z.literal('IP')]);
export type PositionType = z.infer<typeof PositionTypeSchema>;

export const MoveTypeSchema = z.union([
  z.literal('FOLD'),
  z.literal('BET'),
  z.literal('RAISE'),
  z.literal('CALL'),
  z.literal('CHECK'),
  z.literal('ALLIN'),
  z.literal('PREFLOP'),
]);
export type MoveType = z.infer<typeof MoveTypeSchema>;

export const MoveTypeSchemaForException = MoveTypeSchema.or(
  z.union([z.literal('no-set'), z.literal('no-defined')]),
);
export type MoveTypeForException = z.infer<typeof MoveTypeSchemaForException>;

export const ActionSizeSchema = z.union([
  z.literal('S'),
  z.literal('M'),
  z.literal('L'),
  z.literal(0),
]);
export type ActionSizeType = z.infer<typeof ActionSizeSchema>;

export const ActionTypeSchema = z.object({
  move: MoveTypeSchemaForException,
  size: ActionSizeSchema,
});
export type ActionType = z.infer<typeof ActionTypeSchema>;

export const StreetTypeSchema = z.union([z.literal('FLOP'), z.literal('TURN'), z.literal('RIVER')]);
export type StreetType = z.infer<typeof StreetTypeSchema>;

export const RegisteredActionSchema = z.object({
  action: ActionTypeSchema,
  id: z.number(),
  color: z.string(),
});
export type RegisteredActionType = z.infer<typeof RegisteredActionSchema>;

export const HandRangeSchema = z
  .array(z.array(z.array(z.array(z.number()).length(4)).length(4)).length(13))
  .length(13);
export type HandRangeType = z.infer<typeof HandRangeSchema>;

export const HandRangeObjectSchema = z.record(z.record(z.record(z.record(z.number()))));
export type HandRangeObjectType = z.infer<typeof HandRangeObjectSchema>;

export const PairHandRangeSchema = z.object({ OOP: HandRangeSchema, IP: HandRangeSchema });
export type PairHandRangeType = z.infer<typeof PairHandRangeSchema>;
export const HandKindSchema = z.object({
  straightFlush: z.array(CardIndexSchema),
  fourCard: z.array(CardIndexSchema),
  fullHouse: z.array(CardIndexSchema),
  flush: z.array(CardIndexSchema),
  straight: z.array(CardIndexSchema),
  threeCard: z.array(CardIndexSchema),
  twoPair: z.array(CardIndexSchema),
  overPocket: z.array(CardIndexSchema),
  topHit: z.array(CardIndexSchema),
  secondPocket: z.array(CardIndexSchema),
  secondHit: z.array(CardIndexSchema),
  lowPair: z.array(CardIndexSchema),
  AHigh: z.array(CardIndexSchema),
  KHigh: z.array(CardIndexSchema),
  nothing: z.array(CardIndexSchema),
});
export type HandKindType = z.infer<typeof HandKindSchema>;

export const DrawKindSchema = z.object({
  comboDraw: z.array(CardIndexSchema),
  OESD: z.array(CardIndexSchema),
  GSSD: z.array(CardIndexSchema),
  BDSD: z.array(CardIndexSchema),
  flushDraw: z.array(CardIndexSchema),
  noDraw: z.array(CardIndexSchema),
});
export type DrawKindType = z.infer<typeof DrawKindSchema>;

export interface StreetNodeType {
  id: string;
  type: 'StreetNode';
  street: 'FLOP' | 'TURN' | 'RIVER';
  board: CardType[];
  handRange: PairHandRangeType;
  child?: CardNodeType[];
}

export interface CardNodeType {
  id: string;
  cards: CardType[];
  child?: PositionNodeType;
}

export interface PositionNodeType {
  id: string;
  type: 'PositionNode';
  position: PositionType;
  handRange: PairHandRangeType;
  actionIDs: number[];
  handKind: HandKindType;
  drawKind: DrawKindType;
  board: CardType[];
  child?: ActionNodeType[];
}

export interface ActionNodeType {
  id: string;
  move: MoveType;
  size: ActionSizeType;
  child?: StreetNodeType | PositionNodeType;
}
export interface HandNodeType {
  id: string;
  userName: string;
  iconURL: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  child?: PositionNodeType;
}

export const HandNodeSchema: z.ZodSchema<Omit<HandNodeType, 'id' | 'child'>> = z.object({
  userName: z.string(),
  iconURL: z.string(),
  title: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export const StreetNodeSchema: z.ZodSchema<Omit<StreetNodeType, 'id' | 'child'>> = z.object({
  type: z.literal('StreetNode'),
  street: StreetTypeSchema,
  handRange: PairHandRangeSchema,
  board: z.array(CardTypeSchema),
  pot: z.number(),
  stack: z.number(),
});

export const CardNodeSchema = z.object({
  cards: z.array(CardTypeSchema),
});

export const PositionNodeSchema: z.ZodSchema<Omit<PositionNodeType, 'id' | 'child'>> = z.object({
  type: z.literal('PositionNode'),
  position: PositionTypeSchema,
  actionIDs: z.array(z.number()),
  handKind: HandKindSchema,
  drawKind: DrawKindSchema,
  board: z.array(CardTypeSchema),
  handRange: PairHandRangeSchema,
});

export const ActionNodeSchema: z.ZodSchema<Omit<ActionNodeType, 'id' | 'child'>> = z.object({
  move: MoveTypeSchema,
  size: ActionSizeSchema,
});
