import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] = [
    new Quote ('kageni kamunge', ', Lets not so anything hasty', 'njoki njeru', new Date(2021, 4, 25),0,0),
    new Quote ('Boaz Mweria', ' There is no key to happiness,the door is alway open', ' Dora Lynn', new Date(2021, 0, 31),0,0),
    new Quote ('Ruth Omolo', ' Life is a beautiful melody but the lyrics are messed up', 'Nora Daniels', new Date(2020,5,6),0,0),
    new Quote ('Nyaga Njiru', ' Don,t dream,just be your dream', ' Prof Hanny', new Date(2017,4,28),0,0),
    new Quote ('Wairimu muchoki', 'Memory is a wonderful thing if you dont have to deal with the past', 'njiru sammy', new Date(2021,0,1),0,0)
  ];

  toggleDetails(index:any){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete the quote posted by ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote:any){
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  
  upvotes = 0;
downvotes = 0;

  upVote(quote:any) {
    quote.upVote = quote.upVote + 1;
    
    }
    

  constructor() { }

  ngOnInit(): void {
  }

}