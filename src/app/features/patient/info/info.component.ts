import { Component, OnInit } from '@angular/core';
import {Patient} from 'fhir/r4';
import {PatientService} from '../patient.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public infoPatientModel: Patient;

  constructor(private patientService:PatientService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.patientService.subject.subscribe(patient=>{

     // console.log("info: "+JSON.stringify(patient));
      this.infoPatientModel=patient;
    })
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

}
