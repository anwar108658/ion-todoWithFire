import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth:Auth){}
  errorMsg!:string
  login(email:string,password:string){
    signInWithEmailAndPassword(this.auth,email,password).then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error.message)
      this.errorMsg = error.message
    })
    .finally(()=>{
      console.log("first")
    })
  }
}
