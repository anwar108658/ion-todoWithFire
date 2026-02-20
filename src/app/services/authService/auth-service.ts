import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';

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
