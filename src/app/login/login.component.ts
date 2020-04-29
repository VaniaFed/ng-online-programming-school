import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService, IUserLogin} from '../security/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  logIn(user) {
    this.authService.signIn(user as IUserLogin).subscribe(s => {
      console.log(s);
      console.log('signed in');
      this.router.navigateByUrl('/courses');
    });
  }
}
