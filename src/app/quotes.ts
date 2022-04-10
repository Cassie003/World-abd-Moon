export class Quotes {
    showQuote: boolean;
    dislike: any;
      constructor(public index:number ,public name: string, public quote: string, public author: string,public posted:Date) {
          this.showQuote=false;
          
      }



}
