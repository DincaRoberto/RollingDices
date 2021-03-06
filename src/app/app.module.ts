import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiceComponent } from './control-panel/dice/dice.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ChartComponent } from './chart/chart.component';
import { ControlPanelService } from "./control-panel/control-panel.service";

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    ControlPanelComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ControlPanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
