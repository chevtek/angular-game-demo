import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./components/app.component";
import { BoardComponent } from "./components/board.component";
import { SquareComponent } from "./components/square.component";
import { WinnerService } from "./services/winner.service";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: "IWinnerService", useClass: WinnerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
