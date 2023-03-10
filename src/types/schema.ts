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

export const PositionTypeSchema = z.union([
  z.literal('SB'),
  z.literal('BB'),
  z.literal('UTG'),
  z.literal('HJ'),
  z.literal('CO'),
  z.literal('BTN'),
]);
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

export const exceptionSchema = z.union([z.literal('no-set'), z.literal('undefined')]);

export const ActionTypeSchema = z.object({
  move: MoveTypeSchema.or(exceptionSchema),
  size: z.number(),
});
export type ActionType = z.infer<typeof ActionTypeSchema>;

export const StreetTypeSchema = z.union([z.literal('FLOP'), z.literal('TURN'), z.literal('RIVER')]);
export type StreetType = z.infer<typeof StreetTypeSchema>;

export const RegisteredActionSchema = z.array(
  z.object({ action: ActionTypeSchema, actionNum: z.number(), color: z.string() }),
);
export type registeredActionType = z.infer<typeof RegisteredActionSchema>;

export const NumHandRangeSchema = z
  .array(z.array(z.array(z.array(z.number()).length(4)).length(4)).length(13))
  .length(13);
export type NumHandRangeType = z.infer<typeof NumHandRangeSchema>;

export const HandRangeSchema = z.object({
  registeredActions: RegisteredActionSchema,
  handRange: NumHandRangeSchema,
});
export type HandRangeType = z.infer<typeof HandRangeSchema>;

export interface StreetNodeType {
  id: string;
  type: 'StreetNode';
  street: 'FLOP' | 'TURN' | 'RIVER';
  pot: number;
  stack: number;
  children?: CardNodeType[];
}

export interface CardNodeType {
  id: string;
  cards: CardType[];
  children?: PositionNodeType;
}

export interface PositionNodeType {
  id: string;
  type: 'PositionNode';
  position: PositionType;
  handRange: HandRangeType;
  children: ActionNodeType[];
}

export interface ActionNodeType {
  id: string;
  move: MoveType;
  size: number;
  children?: StreetNodeType | PositionNodeType;
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
  pot: z.number(),
  stack: z.number(),
  children: z.lazy(() => z.array(CardNodeTypeSchema)).optional(),
});

export const CardNodeTypeSchema = z.object({
  id: z.string(),
  cards: z.array(CardTypeSchema),
  children: z.lazy(() => PositionNodeTypeSchema).optional(),
});

export const PositionNodeTypeSchema: z.ZodSchema<PositionNodeType> = z.object({
  id: z.string(),
  type: z.literal('PositionNode'),
  position: PositionTypeSchema,
  handRange: HandRangeSchema,
  children: z.lazy(() => z.array(ActionNodeTypeSchema)),
});

export const ActionNodeTypeSchema: z.ZodSchema<ActionNodeType> = z.object({
  id: z.string(),
  move: MoveTypeSchema,
  size: z.number(),
  children: z.lazy(() => z.union([StreetNodeTypeSchema, PositionNodeTypeSchema])).optional(),
});
