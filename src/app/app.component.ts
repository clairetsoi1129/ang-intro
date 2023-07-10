import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import {
  FormControl,
  NgForm,
  NgModel,
  FormGroup,
  Validators,
} from '@angular/forms';

interface Post {
  id: number;
  postTitle: string;
}

interface UserDetails {
  name: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  bool: boolean = false;
  userName: string = '';
  textValue: string = 'Value is coming from component';
  isActive: boolean = true;

  title = 'AngIntro';
  count: number = 285645;
  dcValue: number = 3.85674;
  price: number = 95.99;
  today: Date = new Date();
  postObj: object = {
    id: 1,
    postTitle: 'Post 1',
  };
  postObjArray: Array<string> = [
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 4',
    'Post 5',
  ];
  userdetails = {
    name: 'User 1',
    city: 'Newyork',
    countryCode: 'US',
  };

  dummyText: string =
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

  parentMessage: string = 'Message from Parent App';
  message: string = '';
  fromChildOutput: string = '';
  imgUrl: string =
    'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';

  // Task 2
  postTitle: string = '';
  postDetails: string = '';
  postImageUrl: string = '';
  postUrl: string = '';
  addBackground: boolean = false;

  // Task 3
  name: string = '';
  fullName: string = '';
  email: string = '';
  address: string = '';
  userDetailsArray: Array<UserDetails> = [];

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
  objArray: Array<Post> = [
    // { id: 1, postTitle: 'Post 1' },
    // { id: 2, postTitle: 'Post 2' },
    // { id: 3, postTitle: 'Post 3' },
    // { id: 4, postTitle: 'Post 4' },
    // { id: 5, postTitle: 'Post 5' },
  ];
  stepForm: string = '';

  @ViewChild(PostComponent) childComp: any;

  form: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'";
  contactRegex: string = '[789][0-9]{9}';

  constructor() {
    this.form = new FormGroup({
      fullNameIn: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      emailIn: new FormControl('', [
        Validators.required,
        // Validators.pattern(this.emailRegex),
        Validators.email,
      ]),
      // addressIn: new FormControl('', [Validators.required]),

      contactDetails: new FormGroup({
        addressIn: new FormControl('', [Validators.required]),
        shippingAddressIn: new FormControl('', [Validators.required]),
        contactNoIn: new FormControl('', [
          Validators.required,
          Validators.pattern(this.contactRegex),
        ]),
      }),
    });

    console.log(this.childComp);
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
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

  addNew() {
    this.objArray.push({ id: 6, postTitle: 'post 6' });
  }

  onDelete(index: any) {
    // let index = this.objArray.indexOf(post);
    this.objArray.splice(index, 1);
  }

  onClick(status: string) {
    this.stepForm = status;
  }

  saveData() {
    this.userDetailsArray.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
  }

  deleteData(index: any) {
    // let index = this.objArray.indexOf(post);
    this.userDetailsArray.splice(index, 1);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  onSubmitReactive() {
    console.log(this.form.value);
  }

  getValue(f: NgModel) {
    console.log(f);
  }

  get FullNameIn() {
    return this.form.get('fullNameIn');
  }
  get EmailIn() {
    return this.form.get('emailIn');
  }
  get AddressIn() {
    return this.form.get('contactDetails.addressIn');
  }
  get ShippingAddressIn() {
    return this.form.get('contactDetails.shippingAddressIn');
  }
  get Contact() {
    return this.form.get('contactDetails.contactNoIn');
  }
}
