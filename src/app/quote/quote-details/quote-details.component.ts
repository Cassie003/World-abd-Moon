import { Quote } from '../../models/quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuotesComponent implements OnInit {

  @Input() quote: Quote | undefined;
  @Output() deleteQuoteEvent = new EventEmitter<Quote>();
  @Output() upVoteQuoteEvent = new EventEmitter<Quote>();
  @Output() downVoteEvent = new EventEmitter<Quote>();
  constructor() { }

  ngOnInit(): void {
  }

  // emit an event to the parent component to delete the quote
  deleteQuote(quote: Quote): void  {
    this.deleteQuoteEvent.emit(quote);
  }

  // emit an event to the parent component to upvote the quote
  upVoteQuote(quote: Quote): void  {
    this.upVoteQuoteEvent.emit(quote);
  }

  // emit an event to the parent component to downvote the quote
  downVoteQuote(quote: Quote): void  {
    this.downVoteEvent.emit(quote);
  }

}