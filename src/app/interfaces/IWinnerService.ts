import { SquareValue } from '../enums';

export interface IWinnerService {
  calculateWinner(squares: Array<SquareValue>): SquareValue | false
}
