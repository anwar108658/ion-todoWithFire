import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimationController, IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonModal, IonButtons, IonButton, IonList, IonItem, IonAvatar, IonLabel, IonInput, IonInputPasswordToggle, IonText, IonRouterLink } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [RouterModule,IonContent, IonTitle, CommonModule, FormsModule, IonImg, IonModal, IonInput, IonItem, IonList, IonInputPasswordToggle, IonButton, IonText, IonRouterLink]
})
export class LoginPage implements OnInit {


  constructor(private animationCtrl: AnimationController) {}
  ngOnInit() {
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
