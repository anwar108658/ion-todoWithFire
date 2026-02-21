import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimationController, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonModal, IonButtons, IonButton, IonList, IonItem, IonAvatar, IonLabel, IonInput, IonInputPasswordToggle, IonText, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, IonContent, IonTitle, CommonModule, FormsModule, IonImg, IonModal, IonInput, IonItem, IonList, IonInputPasswordToggle, IonButton, IonText, IonRouterLink, IonIcon]
})
export class LoginPage implements OnInit {
  
  constructor(public authService:AuthService,private animationCtrl: AnimationController) {}
  loginForm!:FormGroup
  ngOnInit() {
    this.InitializeForm()
  }

  InitializeForm(){
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
  }

onSubmit(){
  this.loginForm.markAllAsTouched()
  this.authService.login("abc@gmail.com","123456")
}

trimValue(name: string) {
  const control = this.loginForm.get(name);
  if (control) {
    const val = control.value as string;
    if (val) {
      const trimmed = val.trim();
      control.setValue(trimmed);
    }
  }
}



  // Animation 

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };
  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
}
