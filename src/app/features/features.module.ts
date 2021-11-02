import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import {FormsModule} from '@angular/forms';
import {PatientRoutingModule} from './patient/patient-routing.module';
import {MainPatientComponent} from './patient/main-patient/main-patient.component';
import {AddPatientComponent} from './patient/add-patient/add-patient.component';
import {DeletePatientComponent} from './patient/delete-patient/delete-patient.component';
import {FeaturesRoutingModule} from './features-routing.module';

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
