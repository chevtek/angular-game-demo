import { Component, Input, Inject, Output, EventEmitter } from "@angular/core";
import { IGameState, IWinnerService } from "../interfaces";
import { SquareValue } from "../enums";

@Component({
  selector: "square",
  templateUrl: "./square.component.html"
})
export class SquareComponent {

  @Input() gameState: IGameState;
  @Output() gameStateChange = new EventEmitter<IGameState>();
  @Input() index: number;

  constructor(@Inject("IWinnerService") private winnerService: IWinnerService) {}

  squareValue(): SquareValue {
    const {history, stepNumber} = this.gameState;
    return history[stepNumber].squares[this.index];
  }

  onClick() {
    const {history, stepNumber, xIsNext} = this.gameState;
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (this.winnerService.calculateWinner(squares) || squares[this.index] !== SquareValue.Empty) {
      return;
    }
    squares[this.index] = xIsNext ? SquareValue.X : SquareValue.O;
    this.gameState = {
      history: newHistory.concat([{ squares }]),
      stepNumber: newHistory.length,
      xIsNext: !xIsNext
    };
    this.gameStateChange.emit(this.gameState);
  }

}
