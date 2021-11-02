import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {of, Subject} from 'rxjs';
import {Product} from './products/product';
import {ProductCategory} from './products/product-category';
import {ProductDetails} from './products/product-details';
import {ProductFile} from './products/product-file';
import {ProductTag} from './products/product-tag';
import {Patient} from 'fhir/r4';
import {MyPatient} from './MyPatient';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class RestwsService {

  constructor(private http: HttpClient) { }

  public callapi():any{
    return this.http.get("http://localhost:8082/product").pipe(
  //  return this.http.get("http://localhost:8081/microservice-product/test/testme").pipe(
  //  return this.http.get("https://jsonplaceholder.typicode.com/todos/1").pipe(
    //  catchError(err => of(JSON.stringify(err)))
    );

  }

/*  public save():any{
    return this.http.get("http://localhost:8082/test/testme").pipe(
      //  return this.http.get("http://localhost:8081/microservice-product/test/testme").pipe(
      //  return this.http.get("https://jsonplaceholder.typicode.com/todos/1").pipe(
      //  catchError(err => of(JSON.stringify(err)))
    );
  }*/

  public save():any{
   // let product={"id":null,"name":"product1","price":100,"creationDate":null,"description":null,"category":null}
    let product:Product=new class implements Product {
      category: ProductCategory;
      creationDate: Date;
      description: string;
      id: number;
      name: string;
      price: number;
      productDetails: ProductDetails[];
      productFiles: ProductFile[];
      productTags: ProductTag[];
    };
    product.name="dodo";
    product.price=1000;
    return this.http.post("http://localhost:8082/product/add",product);
  }

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
