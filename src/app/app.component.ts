import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  bool: boolean = false;
  userName: string = '';
  textValue: string = 'Value is coming from component';

  title = 'AngIntro';
  parentMessage: string = 'Message from Parent App';
  message: string = '';
  fromChildOutput: string = '';
  imgUrl: string =
    'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';

  postTitle: string = '';
  postDetails: string = '';
  postImageUrl: string = '';
  postUrl: string = '';
  addBackground: boolean = false;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    // this.message = this.childComp.childMessage;
  }

  receiveMessage($event: any) {
    console.log($event);
    this.fromChildOutput = $event;
  }

  buttonClick() {
    console.log(`Button Click Event Works`);
  }

  onKeyUp($event: any) {
    console.log('Enter Key Pressed');
  }

  onKeyUpForTemplate(username: string) {
    console.log(username);
  }

  onKeyUpForBinding() {
    console.log(this.textValue);
  }

  onKeyUpForPost() {
    console.log(this.textValue);
  }
}
