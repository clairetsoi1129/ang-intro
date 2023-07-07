import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // providers: [PostService],
})
export class PostComponent implements OnInit {
  title: string = 'List of Posts';
  messagePost: string = 'Message Post';
  parentMessage: string = 'Message from Parent Post';
  childMessage: string = 'From Child Component';
  outputChildMessage: string = 'Message from Child Component Via Output';

  posts: Array<any> = [];

  @Input()
  fromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.postList;
  }

  ngOnInit(): void {}

  sendMessage() {
    console.log('Clicked');
    this.messageEvent.emit(this.outputChildMessage);
  }
}
