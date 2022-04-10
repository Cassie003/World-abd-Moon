import { Quote } from './../models/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   createQuoteForm = false;
   quotes: Quote[] = [
      new Quote(
        Math.floor(Math.random() * 100),
        'Dalai Lama',
        'Dalai Lama',
        'The purpose of our lives is to be happy.',
        new Date('2022, 04, 9')
      ),
      new Quote(
        Math.floor(Math.random() * 100),
        'Casey Minu',
        'Casey Minu',
        'Forever is an illusion just give me todays  undivided attention -',
        new Date('2022, 04, 4')
      ),
      new Quote(
        Math.floor(Math.random() * 100),
        'Liou Holtz',
        'Liou Holtz',
        'Winners embrace hard work. They love the discipline of it, the trade-off they’re making to win. Losers, on the other hand, see it as punishment. And that’s the difference.',
        new Date('2022, 02, 17')
      ),
      new Quote(
        Math.floor(Math.random() * 100),
        'Jymal Anthony',
        'Jymal Anthony',
        'A true friend accepts who you are, but also helps you become who you should be',
        new Date('2022, 03, 26')
      ),
      new Quote(
        Math.floor(Math.random() * 100),
        'Steve Maraboli',
        'Steve Maraboli',
        'Happiness is not the absence of problems, it’s the ability to deal with them.',
        new Date('2022, 01, 9')
      ),
      new Quote(
        Math.floor(Math.random() * 100),
        'Natalie',
        'Natalie',
        'My creativity is precious and unique.',
        new Date('2022, 02, 4')
      ),
   ];

  constructor() { 
    console.log(this.quotes);
  }

  ngOnInit(): void {}

  displayCreateQuoteForm() {
    this.createQuoteForm === true
    ? (this.createQuoteForm = false)
    : (this.createQuoteForm = true);
  }
  createNewQuote(quote) {
    let quoteId = Math.floor(Math.random()* 100)
    this.quotes.push(
      new Quote(
        quoteId,
        quote.author,
        quote.createdBy,
        quote.quoteDescription,
        new Date()
      )
    );
  }
  viewDetails(index) {
    this.quotes[index].viewQuotes = !this.quotes[index].viewQuotes;
  }

  deleteTheQuote(deleteQuoteEvent, index) {
    if (deleteQuoteEvent) {
      this.quotes.splice(index, 1);
    }
  }

  upVoteQuote(upVoteQuoteEvent, index) {
    if (upVoteQuoteEvent) {
      this.quotes[index].likes++;
    }
    console.log(this.getQuoteWithHighestLikesAndDislikes());
  }

  downVoteQuote(downVoteQuoteEvent, index) {
    if (downVoteQuoteEvent) {
      this.quotes[index].dislikes++;
    }
  }

  getQuoteWithHighestLikes() {
    let quoteWithHighestLikes = this.quotes[0];
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].likes > quoteWithHighestLikes.likes) {
        quoteWithHighestLikes = this.quotes[i];
      }
    }
    return quoteWithHighestLikes;
  }

  getQuoteWithHighestLikesAndDislikes() {
    let quoteWithHighestLikesAndDislikes = this.quotes[0];
    for (let i = 0; i < this.quotes.length; i++) {
      if (
        this.quotes[i].likes + this.quotes[i].dislikes >
        quoteWithHighestLikesAndDislikes.likes +
          quoteWithHighestLikesAndDislikes.dislikes
      ) {
        quoteWithHighestLikesAndDislikes = this.quotes[i];
      }
    }
    return quoteWithHighestLikesAndDislikes;
  }

}
