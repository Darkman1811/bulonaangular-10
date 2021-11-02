import { Component, OnInit } from '@angular/core';
import {Patient} from 'fhir/r4';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit {
  public editPatientModel: Patient;

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
      this.patientService.subject.subscribe(patient=>{
      this.editPatientModel=patient;
    })
  }

  public editPatient(patient:Patient){
    console.log("edit");

    this.editPatientModel=patient;
  }

  public updatePatient(){
    this.patientService.updatePatient(this.editPatientModel).subscribe(data=>{
      console.log(data);
      this.editPatientModel=null;
    });
  }
}
