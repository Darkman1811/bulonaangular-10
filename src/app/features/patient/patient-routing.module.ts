import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainPatientComponent} from './main-patient/main-patient.component';


const routes:Routes=[
  {
    path: '',
    children:[
                {
                  path:'main',
                 component: MainPatientComponent,
                 data: {
                         title: 'Gestion des patients',
                         roles: ['admin', 'manager']
                       }
                }
            ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
// @ts-ignore
export class PatientRoutingModule { }
