import {
  Address, Attachment,
  CodeableConcept,
  ContactPoint,
  Extension,
  FhirResource, HumanName, Identifier,
  Meta,
  Narrative,
  Patient, PatientCommunication,
  PatientContact,
  PatientLink,
  Period,
  Reference
} from 'fhir/r4';
export class  MyPatient implements Patient{
  _active: Element | undefined;
  _birthDate: Element | undefined;
  _deceasedBoolean: Element | undefined;
  _deceasedDateTime: Element | undefined;
  _gender: Element | undefined;
  _id: Element | undefined;
  _implicitRules: Element | undefined;
  _language: Element | undefined;
  _multipleBirthBoolean: Element | undefined;
  active: boolean | undefined;
  address: Address[] | undefined;
  birthDate: string | undefined;
  communication: PatientCommunication[] | undefined;
  contact: PatientContact[] | undefined;
  contained: FhirResource[] | undefined;
  deceasedBoolean: boolean | undefined;
  deceasedDateTime: string | undefined;
  extension: Extension[] | undefined;
  gender: "male" | "female" | "other" | "unknown" | undefined;
  generalPractitioner: Reference[] | undefined;
  id: string | undefined;
  identifier: Identifier[] | undefined;
  implicitRules: string | undefined;
  language: string | undefined;
  link: PatientLink[] | undefined;
  managingOrganization: Reference | undefined;
  maritalStatus: CodeableConcept | undefined;
  meta: Meta | undefined;
  modifierExtension: Extension[] | undefined;
  multipleBirthBoolean: boolean | undefined;
  multipleBirthInteger: number | undefined;
  name: HumanName[] | undefined;
  photo: Attachment[] | undefined;
  resourceType: "Patient";
  telecom: ContactPoint[] | undefined;
  text: Narrative | undefined;


}
