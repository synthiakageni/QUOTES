import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote?: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  @Output() upvote = new EventEmitter<number>();
  @Output() downvote = new EventEmitter<number>();


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upVote(val:number) {
    this.upvote.emit(val);
  }
  downVote(val:number) {
    this.downvote.emit(val);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
