import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  title: string = 'List of Posts';
  messagePost: string = 'Message Post';

  @Input()
  fromParent!: string;

  constructor() {}

  ngOnInit(): void {}
}
