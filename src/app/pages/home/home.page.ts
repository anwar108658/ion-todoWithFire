import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonButton, IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, CommonModule, FormsModule, IonIcon, IonButton, IonProgressBar]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  click(e:PointerEvent){
    console.log()
  }

}
