import { Injectable } from "@angular/core";
import { SquareValue } from "../enums";
import { IWinnerService } from "../interfaces";

@Injectable({ providedIn: "root" })
export class WinnerService implements IWinnerService {
  private winConfigurations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  calculateWinner(squares: Array<SquareValue>): SquareValue | false {
    for (let index = 0; index < this.winConfigurations.length; index++) {
      const [a, b, c] = this.winConfigurations[index];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return false;
  }
}
