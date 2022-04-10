export class Quote {
  viewQuoteDetails: boolean;
  randomId = Math.floor(Math.random() * 100);
  viewQuotes: boolean;
  constructor(
    id: number,
    author: string,
    createdBy: string,
    quoteDescription: string,
    createdAt: Date,
    likes: number = 0,
    dislikes: number = 0
  ) {
    this.viewQuoteDetails = false;
  }
  }