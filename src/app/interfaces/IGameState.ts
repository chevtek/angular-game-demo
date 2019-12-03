import { SquareValue } from '../enums';

export interface IGameState {
  history: IHistory;
  stepNumber: number;
  xIsNext: boolean;
}

export interface IHistoryItem {
  squares: Array<SquareValue>;
}

export interface IHistory extends Array<IHistoryItem>{};
