import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from '@angular/fire/auth';
import { users } from 'src/app/types/authType';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth:Auth){}
  googleProvider = new GoogleAuthProvider()
  errorMsg!:string

  login(email:string,password:string){
    signInWithEmailAndPassword(this.auth,email,password).then((response) => {
      console.log(response,response.user.uid)
    })
    .catch((error) => {
      console.log(error.message)
      this.errorMsg = error.message
    })
    .finally(()=>{
      console.log("first")
    })
  }

  registerAccount({name,email,password}:users){
    createUserWithEmailAndPassword(this.auth,email,password)
    .then((response) => {
      const user = response.user
      return updateProfile(user, { displayName: name })
        .then(() => sendEmailVerification(user)) // wait for email to send
        .then((e) => {
          console.log("User created and verification email sent ✅");
          console.log("Check inbox to verify email before login",response);
        });
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onSignInWithGoogle(){
    signInWithPopup(this.auth,this.googleProvider)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

}
