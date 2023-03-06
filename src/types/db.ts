export type CardMarkType = 'h' | 'c' | 's' | 'd';
export type CardNumType = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'T' | 'J' | 'Q' | 'K';
export type CardType = { mark: CardMarkType; num: CardNumType };

export type PositionType = 'SB' | 'BB' | 'UTG' | 'HJ' | 'CO' | 'BTN';
export type MoveType = 'FOLD' | 'BET' | 'CALL' | 'RAISE' | 'ALLIN' | 'CHECK';

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
