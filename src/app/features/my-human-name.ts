import {Extension, HumanName, Period} from 'fhir/r4';

export class MyHumanName  implements HumanName {
  _family: Element | undefined;
  _given: Element[] | undefined;
  _id: Element | undefined;
  _prefix: Element[] | undefined;
  _suffix: Element[] | undefined;
  _text: Element | undefined;
  _use: Element | undefined;
  extension: Extension[] | undefined;
  family: string | undefined;
  given: string[] | undefined;
  id: string | undefined;
  period: Period | undefined;
  prefix: string[] | undefined;
  suffix: string[] | undefined;
  text: string | undefined;
  use: "usual" | "official" | "temp" | "nickname" | "anonymous" | "old" | "maiden" | undefined;
}
