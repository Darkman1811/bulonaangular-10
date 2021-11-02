import { Component, OnInit } from '@angular/core';
import {Patient} from 'fhir/r4';
import {PatientService} from '../patient.service';
import {MyPatient} from '../../MyPatient';
import {newArray} from '@angular/compiler/src/util';
import {MyHumanName} from '../../my-human-name';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  public patientModel: Patient;

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.patientModel=new MyPatient();
    this.patientModel.name=newArray(1)
    this.patientModel.name[0]=new MyHumanName();
    this.patientModel.name[0].given=newArray(2);
    this.patientModel.name[0].prefix=newArray(1);
  }


  public addPatient(){
    this.patientService.savePatient(this.patientModel).subscribe(data=>{
      console.log(data);
      //this.getAllPatients();
    });
  }

}
