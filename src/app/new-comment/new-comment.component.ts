import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  @Output() newCommentClick: EventEmitter<Object> = new EventEmitter();

  constructor() { }

  buttonClick(name:string, comment:string, rate:number){
    let newEvent = {name: name, rating: rate, text: comment}
    this.newCommentClick.emit(newEvent);

  }

  ngOnInit() {
  }

}
