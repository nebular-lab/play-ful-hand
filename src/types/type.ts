export type CardMarkType = 'h' | 'c' | 's' | 'd';
export type CardNumType = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'T' | 'J' | 'Q' | 'K';
export type CardType = { mark: CardMarkType; num: CardNumType };

export type PositionType = 'SB' | 'BB' | 'UTG' | 'HJ' | 'CO' | 'BTN';
export type MoveType = 'FOLD' | 'BET' | 'CALL' | 'RAISE' | 'ALLIN' | 'CHECK';
