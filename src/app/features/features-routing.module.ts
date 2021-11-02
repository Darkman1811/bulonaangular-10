import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeatureComponent} from './feature/feature.component';


const routes:Routes=[
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)

  },
  {
    path: 'feature',
    component: FeatureComponent


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
export class FeaturesRoutingModule { }
