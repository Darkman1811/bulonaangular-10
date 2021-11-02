import { Component, OnInit } from '@angular/core';
import {RestwsService} from '../restws.service';
import {MyPatient} from "../MyPatient"
import Client from 'fhir-kit-client';
import {
  Address, Attachment,
  CodeableConcept,
  ContactPoint,
  Extension,
  FhirResource,
  Meta,
  Narrative,
  Patient, PatientCommunication,
  PatientContact,
  PatientLink,
  Period,
  Reference
} from 'fhir/r4';
import {Identifier,HumanName} from 'fhir/r4';
import {newArray} from '@angular/compiler/src/util';
import {MyHumanName} from '../my-human-name';
import * as alertFunctions from '../../shared/data/sweet-alerts';
import Callback = JQuery.Deferred.Callback;
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blank',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
public patientModel: Patient;
public editPatientModel: Patient;
public listPatientModel:Patient[];

  constructor(private service:RestwsService, private modalService: NgbModal) {  }

  ngOnInit() {
    this.patientModel=new MyPatient();
    this.patientModel.name=newArray(1)
    this.patientModel.name[0]=new MyHumanName();
    this.patientModel.name[0].given=newArray(2);
    this.patientModel.name[0].prefix=newArray(1);

    this.getAllPatients();
  }

  confirmText(){
  //  alertFunctions.confirmText();
  }


  public addPatient(){
        this.service.savePatient(this.patientModel).subscribe(data=>{
          console.log(data);
          this.getAllPatients();
        });
   }

  public editPatient(patient:Patient,content){
    console.log(content.innerHTML);

    this.modalService.open(content.innerHTML);
    this.editPatientModel=patient;
  }

  public updatePatient(){
    this.service.updatePatient(this.editPatientModel).subscribe(data=>{
      console.log(data);
      this.editPatientModel=null;
    });
  }



  public deletePatient(patient:Patient){

   // let local_service=this.service;
    let local_feature=this;


    let ret=function(result) {
      console.log("callback: " + result);
      if (result==true) {
        local_feature.service.deletePatient(patient).subscribe(data => {
          local_feature.getAllPatients();
        });

      }
    }
    alertFunctions.confirmAction(ret);
  }

  public getAllPatients(){
    this.listPatientModel=this.service.getAllpatients();
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

//=====================================TESTING CODES============================================
  public save(){
    console.log("call api2");
    this.service.save().subscribe(
      data => {
        console.log('save='+data);
      });
  }

  public callapi(){
    console.log("call api2");
    this.service.callapi().subscribe(
      data => {
        console.log('callapi='+JSON.stringify(data));
      });
  }

  public directFhirCall(){
    const client = new Client({ baseUrl: '  http://localhost:8888/fhir' })
    const isPatient = (resource: fhir4.Resource): resource is fhir4.Patient => {
      return resource.resourceType === 'Patient'
    }
    client
      .read({resourceType: 'Patient', id: '2'})
      .then(res => {
        if (isPatient(res)) {
          console.dir(res.name, { depth: 4})
        }
      })
  }
}
