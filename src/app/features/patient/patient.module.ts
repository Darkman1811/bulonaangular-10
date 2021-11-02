import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module'
import {MainPatientComponent} from './main-patient/main-patient.component';
import {ListPatientComponent} from './list-patient/list-patient.component';
import {AddPatientComponent} from './add-patient/add-patient.component';
import {UpdatePatientComponent} from './update-patient/update-patient.component';
import {DeletePatientComponent} from './delete-patient/delete-patient.component';
import {FormsModule} from '@angular/forms';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [MainPatientComponent, ListPatientComponent, AddPatientComponent, UpdatePatientComponent, DeletePatientComponent, InfoComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule

  ],
  exports:[MainPatientComponent]
})
//@ts-ignore
export class PatientModule { }
