import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IGameState } from "../interfaces";

@Component({
  selector: "board",
  templateUrl: "./board.component.html"
})
export class BoardComponent {

  @Input() gameState: IGameState;
  @Output() gameStateChange = new EventEmitter<IGameState>();

  updateGameState(gameState: IGameState) {
    this.gameStateChange.emit(gameState);
  }

}
