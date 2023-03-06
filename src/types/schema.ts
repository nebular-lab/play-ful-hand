import { z } from 'zod';

import { ActionNodeType, HandNodeType, PositionNodeType, StreetNodeType } from './db';

export const CardMarkTypeSchema = z.enum(['h', 'c', 's', 'd']);
export const CardNumTypeSchema = z.enum(['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']);
export const CardTypeSchema = z.object({
  mark: CardMarkTypeSchema,
  num: CardNumTypeSchema,
});

export const testSchema = z.object({
  name: z.string(),
  pass: z.string(),
});
export type testSchemaType = z.infer<typeof testSchema>;

export const PositionTypeSchema = z.enum(['SB', 'BB', 'UTG', 'HJ', 'CO', 'BTN']);
export const MoveTypeSchema = z.enum(['FOLD', 'BET', 'CALL', 'RAISE', 'ALLIN', 'CHECK']);

export const HandNodeTypeSchema: z.ZodSchema<HandNodeType> = z.object({
  id: z.string(),
  flopNode: z.lazy(() => StreetNodeTypeSchema),
});

export const StreetNodeTypeSchema: z.ZodSchema<StreetNodeType> = z.object({
  id: z.string(),
  type: z.literal('StreetNode'),
  street: z.enum(['FLOP', 'TURN', 'RIVER']),
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
  children: z.lazy(() => z.array(ActionNodeTypeSchema)),
});

export const ActionNodeTypeSchema: z.ZodSchema<ActionNodeType> = z.object({
  id: z.string(),
  move: MoveTypeSchema,
  size: z.number(),
  children: z.lazy(() => z.union([StreetNodeTypeSchema, PositionNodeTypeSchema])).optional(),
});
