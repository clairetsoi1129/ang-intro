import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  // providers: [PostService],
})
export class PostListComponent implements OnInit {
  title: string = 'List of Posts';
  messagePost: string = 'Message Post';
  postList: Array<any> = [];

  @Input()
  fromParent!: string;

  constructor(private postService: PostService) {
    this.postList = postService.postList;
  }

  ngOnInit(): void {}
}
