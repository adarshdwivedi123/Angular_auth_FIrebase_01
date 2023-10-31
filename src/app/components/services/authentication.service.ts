import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fireAuth:AngularFireAuth,private router:Router) {
  
  }
  // THis Method is used for login a Existing user
  login(email:string,pasword:string){
    this.fireAuth.signInWithEmailAndPassword(email,pasword).then(()=>{
      
      alert('login succesfull');
      localStorage.setItem('token','true');
      this.router.navigate(['/home'])

    },err =>{
          alert('something went wrong');
          this.router.navigate(['/login'])
    })      
  }

  // THis Method is used for singIn a new user
  register(email:string,password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registration succesfull');
      this.router.navigate(['/login']);


    },err =>{
      alert(err.message);
      this.router.navigate(['/register']);

    })
  }
    //Sign out user
    logout(){
      this.fireAuth.signOut().then(() =>{
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
      },err =>{
        alert(err.message);

      })

  }
}
