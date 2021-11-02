import { Injectable } from '@angular/core';
import {Patient} from 'fhir/r4';
import {MyPatient} from '../MyPatient';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService{

  public subject:Subject<Patient>=new Subject<Patient>();
  public infoSubject:Subject<Patient>=new Subject<Patient>();



  constructor(private http:HttpClient) { }


  public savePatient(patient:Patient){
    console.log("service:"+JSON.stringify(patient));
    patient.resourceType="Patient"
    return this.http.post("http://localhost:8082/patient",JSON.stringify(patient),{});
  }

  public updatePatient(patient:Patient){
    patient.resourceType="Patient"
    return this.http.put("http://localhost:8082/patient",JSON.stringify(patient),{});
  }


  public delete(patient:Patient){
    patient.resourceType="Patient";
    return this.http.delete("http://localhost:8082/patient/"+patient.id);
  }

  public deletePatient(patient:Patient){
    patient.resourceType="Patient";
    console.log("Delete patient: "+patient);
    return this.http.delete("http://localhost:8082/patient/"+patient.id);

  }

  public getOnePatient(patient:Patient){
    return this.http.get("http://localhost:8082/patient/"+patient.id);

  }

  public getAllpatients():Patient[]{
    let patients: Patient[]=[];
    this.http.get("http://localhost:8082/patient/getAll").subscribe(data=>{
      let ret:string[];
      ret=data as Array<string>;
      //Object.values(data);
      //   let ret:String[];
      ret.forEach(value => {
        // console.log(value);
        let patient:MyPatient=JSON.parse(value);
        patients.push(patient);
      })

    });
    return patients

  }
}
