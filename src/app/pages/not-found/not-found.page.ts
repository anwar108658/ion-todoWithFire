import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  standalone: true,
  imports: [RouterModule,IonContent, CommonModule, FormsModule, IonButton, IonRouterLink]
})
export class NotFoundPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
