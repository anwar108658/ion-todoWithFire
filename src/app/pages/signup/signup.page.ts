import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { AnimationController, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonModal, IonButtons, IonButton, IonList, IonItem, IonAvatar, IonLabel, IonInput, IonInputPasswordToggle, IonText, IonBackButton, IonRouterLink, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonTitle, CommonModule, FormsModule, IonImg, IonModal, IonInput, IonItem, IonList, IonInputPasswordToggle, IonButton, IonHeader, IonToolbar, IonBackButton, IonButtons, ReactiveFormsModule, IonIcon]
})
export class SignupPage implements OnInit {

  constructor(private animationCtrl: AnimationController,public authService:AuthService) {}
  ngOnInit() {
    this.InitializeForm()
  }
  registerForm!:FormGroup

  InitializeForm(){
    this.registerForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
  }

  onSubmit(){
    console.log(this.registerForm.value)
    if (this.registerForm.invalid) {
      return alert("invalid Credential")
    }
    this.authService.registerAccount(this.registerForm.value)
  }

  trimValue(name: string) {
    const control = this.registerForm.get(name);
    if (control) {
      const val = control.value as string;
      if (val) {
        const trimmed = val.trim();
        control.setValue(trimmed);
      }
    }
  }

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
