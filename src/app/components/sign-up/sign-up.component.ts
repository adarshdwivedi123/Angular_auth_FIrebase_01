import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/components/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email:any;
  password:any;
  signUpForm: FormGroup;
 

  constructor(private auth:AuthenticationService,private fb: FormBuilder) { 
    this.signUpForm= this.fb.group({
      email:new UntypedFormControl('',[Validators.required,Validators.email]),
      password:new UntypedFormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
  }

  // THis Method is used for singIn a new user
  register(){
    this.email=this.signUpForm?.get('email')?.value;
    this.password=this.signUpForm?.get('password')?.value;
    if(this.email == '')
    {
        alert("Please Enter email")
    }
    if(this.password == '')
    {
        alert("Please Enter password")
    }
    this.auth.register(this.email,this.password);
    
    this.email='';
    this.password='';
  }

}
