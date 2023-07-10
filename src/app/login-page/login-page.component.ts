import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  form: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          noSpace.noSpaceValidations,
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  get fc() {
    return this.form.controls;
  }
}
