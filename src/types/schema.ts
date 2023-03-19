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

export const PositionTypeSchema = z.union([z.literal('OOP'), z.literal('IP')]);
export type PositionType = z.infer<typeof PositionTypeSchema>;

export const MoveTypeSchema = z.union([
  z.literal('FOLD'),
  z.literal('BET'),
  z.literal('RAISE'),
  z.literal('CALL'),
  z.literal('CHECK'),
  z.literal('ALLIN'),
]);
export type MoveType = z.infer<typeof MoveTypeSchema>;

export const MoveTypeSchemaForException = MoveTypeSchema.or(
  z.union([z.literal('no-set'), z.literal('no-defined')]),
);
export type MoveTypeForException = z.infer<typeof MoveTypeSchemaForException>;
export const ActionTypeSchema = z.object({
  move: MoveTypeSchemaForException,
  size: z.number(),
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
export const PairHandRangeSchema = z.object({ OOP: HandRangeSchema, IP: HandRangeSchema });
export type PairHandRangeType = z.infer<typeof PairHandRangeSchema>;
export interface StreetNodeType {
  id: string;
  type: 'StreetNode';
  street: 'FLOP' | 'TURN' | 'RIVER';
  pot: number;
  stack: number;
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
  child?: ActionNodeType[];
}

export interface ActionNodeType {
  id: string;
  move: MoveType;
  size: number;
  child?: StreetNodeType | PositionNodeType;
}
export interface HandNodeType {
  id: string;
  flopNode: StreetNodeType;
}

export const HandNodeTypeSchema: z.ZodSchema<HandNodeType> = z.object({
  id: z.string(),
  flopNode: z.lazy(() => StreetNodeTypeSchema),
});

export const StreetNodeTypeSchema: z.ZodSchema<StreetNodeType> = z.object({
  id: z.string(),
  type: z.literal('StreetNode'),
  street: StreetTypeSchema,
  handRange: PairHandRangeSchema,
  pot: z.number(),
  stack: z.number(),
  child: z.lazy(() => z.array(CardNodeTypeSchema)).optional(),
});

export const CardNodeTypeSchema = z.object({
  id: z.string(),
  cards: z.array(CardTypeSchema),
  child: z.lazy(() => PositionNodeTypeSchema).optional(),
});

export const PositionNodeTypeSchema: z.ZodSchema<PositionNodeType> = z.object({
  id: z.string(),
  type: z.literal('PositionNode'),
  position: PositionTypeSchema,
  handRange: PairHandRangeSchema,
  child: z.lazy(() => z.array(ActionNodeTypeSchema)),
});

export const ActionNodeTypeSchema: z.ZodSchema<ActionNodeType> = z.object({
  id: z.string(),
  move: MoveTypeSchema,
  size: z.number(),
  child: z.lazy(() => z.union([StreetNodeTypeSchema, PositionNodeTypeSchema])).optional(),
});
