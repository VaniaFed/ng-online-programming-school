import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordAgain: ['', [Validators.required]],
    });
  }

  register(fields: any) {
    console.log('reg');
    console.log(fields);
  }
}
