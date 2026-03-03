import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonModal, IonList, IonItem, IonAvatar, IonImg, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonModal, IonList, IonItem, IonAvatar, IonImg, IonLabel]
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
