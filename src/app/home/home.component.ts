// Home component created to refer  to quotes
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1,'Dalia Lama','The purpose of our lives is to be happy.','Dalia Lama',new Date(2022, 4, 9) ),
    new Quotes(2,'Casey Minu','Forever is an illusion just give me todays  undivided attention - ','Casey Minu' ,new Date(2022, 4, 4)),
    new Quotes(3,'Liou Holtz','Winners embrace hard work. They love the discipline of it, the trade-off they’re making to win. Losers, on the other hand, see it as punishment. And that’s the difference.','Liou Holtz',new Date(2022, 2, 17) ),
    new Quotes(4,'Jymal Anthony','A true friend accepts who you are, but also helps you become who you should be','Jymal Anthony',new Date(2022, 2, 26) ),
    new Quotes(5,'Steve Maraboli','Happiness is not the absence of problems, it’s the ability to deal with them.','Steve Maraboli',new Date(2022, 1, 9) ),
    new Quotes(6,'Natalie','My creativity is precious and unique.','Natalie',new Date(2022, 2, 4) ),

  ];
  toggleDetails(index:any){
  this.quotes[index].showQuote=!this.quotes[index].showQuote;
  }

 


completeQuote(isComplete:any,index:number){
if(isComplete){
  let toDelete=confirm(`It will delete quote posted by ${this.quotes[index].name}`)
  if (toDelete){
  this.quotes.splice(index,1);
  }
}
}

addNewQuote(quotes:Quotes){
  let quoteLength=this.quotes.length;
  quotes.index=quoteLength+1;
  quotes.posted=new Date(quotes.posted);
  this.quotes.push(quotes);
}


  constructor() { }

  ngOnInit(): void {

  }

}

