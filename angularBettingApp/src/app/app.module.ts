import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BetContainerComponent } from './components/bet-container/bet-container.component';
import { NumbersSelectionAreaComponent } from './components/numbers-selection-area/numbers-selection-area.component';
import { SelectionSummaryComponent } from './components/selection-summary/selection-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BetContainerComponent,
    NumbersSelectionAreaComponent,
    SelectionSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
