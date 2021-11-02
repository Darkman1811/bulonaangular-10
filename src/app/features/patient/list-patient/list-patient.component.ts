import { Component, OnInit } from '@angular/core';
import {Patient} from 'fhir/r4';
import {MyPatient} from '../../MyPatient';
import {newArray} from '@angular/compiler/src/util';
import {MyHumanName} from '../../my-human-name';
import {PatientService} from '../patient.service';
import * as alertFunctions from '../../../shared/data/sweet-alerts';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  public listPatientModel:Patient[];

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  public getAllPatients(){
    this.listPatientModel=this.patientService.getAllpatients();
  }

  public checkPatient(patient):boolean{
    if((patient!==null)&&(patient!==undefined) ){
      if((patient.name!==null)&&(patient.name!==undefined)){
        if((patient.name[0]!==null)&&(patient.name[0]!==undefined)){
          if((patient.name[0].given!==null)&&(patient.name[0].given!==undefined)){
            if(((patient.name[0].given[0]!==null)&&(patient.name[0].given[0]!=undefined)) && ((patient.name[0].given[1]!==null)&&(patient.name[0].given[1]!=undefined))){
              return true;
            }

          }
        }
      }

    }
    return false;
  }

  public editPatient(patient: Patient){
    this.patientService.subject.next(patient);
  }


  public deletePatient(patient:Patient) {

    let local_feature = this;

    let ret = function(result) {
      console.log("callback: " + result);
      if (result == true) {
        local_feature.patientService.deletePatient(patient).subscribe(data => {
          local_feature.getAllPatients();
        });

      }
    }

    alertFunctions.confirmAction(ret);


  }



  }
