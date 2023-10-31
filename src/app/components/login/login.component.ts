import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  loginForm: FormGroup;

  constructor(private auth: AuthenticationService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }
// THis Method is used for login  a existing user
  login() {
    this.email = this.loginForm?.get('email')?.value
    this.password = this.loginForm?.get('password')?.value
    if (this.email == '') {
      alert("Please Enter email")
    }
    if (this.password == '') {
      alert("Please Enter password")
    }
    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }

}
