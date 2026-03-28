import { Component, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonContent, IonModal, IonFab, IonFabButton, IonIcon, IonButton, IonTabs, IonTabBar, IonTabButton, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonDatetimeButton, IonDatetime, IonTextarea } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { BtnComponent } from "src/app/btn/btn.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonTabs, IonTabBar, IonTabButton, IonFab, IonFabButton, IonModal, IonButton, IonList, IonItem, IonInput, IonSelect, IonSelectOption, IonDatetimeButton, IonDatetime, IonTextarea]
})
export class DashboardPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  
  taskForm!: FormGroup
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  ngOnInit() {
    this.formInitialize()
  }

  formInitialize(){
    this.taskForm = new FormGroup({
      taskName: new FormControl('',Validators.required),
      taskCategory: new FormControl('',Validators.required),
      taskDeadline: new FormControl('',Validators.required),
      taskDescription: new FormControl('',Validators.required),
    })
  }

}
