import { Component, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonModal, IonList, IonItem, IonAvatar, IonImg, IonLabel, IonFab, IonFabButton, IonHeader, IonToolbar, IonIcon, IonButton, IonTabs, IonTabBar, IonTabButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonTabs, IonTabBar, IonTabButton, IonFab, IonFabButton, IonModal, IonButton]
})
export class DashboardPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  ngOnInit() {
  }

}
