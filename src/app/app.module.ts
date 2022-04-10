import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quote/quotes/quotes.component';
import { FormsModule } from '@angular/forms';
import { QuotesFormComponent } from './quote/quotes-form/quotes-form.component';
import { DayCountPipe } from './pipe/day-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    QuotesFormComponent,
    DayCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }