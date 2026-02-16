import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonList, IonItem, IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [RouterModule,IonContent, CommonModule, FormsModule, IonImg, IonItem, IonButton, IonRouterLink]
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
