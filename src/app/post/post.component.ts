import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of Posts';
  messagePost: string = 'Message Post';
  parentMessage: string = 'Message from Parent Post';
  childMessage: string = 'From Child Component';
  outputChildMessage: string = 'Message from Child Component Via Output';

  @Input()
  fromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    console.log('Clicked');
    this.messageEvent.emit(this.outputChildMessage);
  }
}
