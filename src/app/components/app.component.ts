import { Component, OnInit, Inject } from "@angular/core";
import { SquareValue } from "../enums";
import { IGameState, IWinnerService } from "../interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = "angular-game-demo";
  gameState: IGameState;

  // Must use non-interface type or manually map the interface in
  // module provider array.
  constructor(@Inject("IWinnerService") private winnerService: IWinnerService) {}

  ngOnInit() {
    this.gameState = {
      history: [
        { squares: Array(9).fill(SquareValue.Empty) }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  status() {
    const {history, stepNumber, xIsNext} = this.gameState;
    const current = history[stepNumber];
    const winner = this.winnerService.calculateWinner(current.squares);

    if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next player: ${xIsNext ? SquareValue.X : SquareValue.O}`;
    }
  }

  moveText(move: number) {
    return move ? `Go to move #${move}` : "Go to game start";
  }

  jumpTo(step: number) {
    const {history} = this.gameState;
    this.gameState = {
      history,
      stepNumber: step,
      xIsNext: (step % 2) === 0
    };
  }
}
