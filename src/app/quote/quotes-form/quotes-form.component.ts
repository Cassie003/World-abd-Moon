import { NgForm } from '@angular/forms';
import {Component,EventEmitter,OnInit,Output,ViewChild,} from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  @ViewChild('f')
  quotesForm!: NgForm;
  newQuote = new Quote(0, '', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  displaySuccessMessage = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void  {
    this.displaySuccessMessage = true;
    this.newQuote.author = this.quotesForm.value.author;
    this.newQuote.quoteDescription = this.quotesForm.value.quoteDescription;
    this.newQuote.createdBy = this.quotesForm.value.createdBy;
    this.addQuote.emit(this.newQuote);
    this.quotesForm.reset();
  }
}