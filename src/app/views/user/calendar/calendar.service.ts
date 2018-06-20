import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { patientsNine, patientsTen, patientsEleven, patientsTwelve, patientsOne, patientsTwo, patientsThree,
        patientsFour, patientsFive } from './mock.data';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
    //Replace with Http constructor when connecting to Spring
   // constructor(private http: HttpClient) {}
  constructor() { }

//Retreive patients by appoint start time

  // getPatientsNine(): Observable<any[]> {
  //   return this.http.post(patientsNine)('/springdata/URL/HERE', '');
  // }
  getPatientsNine(): Observable<any[]>{
    return of(patientsNine);
  }
// getPatientsNine(): Observable<any[]> {
  //   return this.http.post(patients)('/springdata/URL/HERE', '');
  // }
  getPatientsTen(): Observable<any[]>{
    return of(patientsTen);
  }
 // getPatientsEleven(): Observable<any[]> {
  //   return this.http.post(patients)('/springdata/URL/HERE', '');
  // }
  getPatientsEleven(): Observable<any[]>{
    return of(patientsEleven);
  }
// getPatientsTwelve(): Observable<any[]> {
  //   return this.http.post(patientsTwelve)('/springdata/URL/HERE', '');
  // }
  getPatientsTwelve(): Observable<any[]>{
    return of(patientsTwelve);
  }
  // getPatientsOne(): Observable<any[]> {
  //   return this.http.post(patientsOne)('/springdata/URL/HERE', '');
  // }
  getPatientsOne(): Observable<any[]>{
    return of(patientsOne);
  }
 // getPatientsTwo(): Observable<any[]> {
  //   return this.http.post(patientsTwo)('/springdata/URL/HERE', '');
  // }
  getPatientsTwo(): Observable<any[]>{
    return of(patientsTwo);
  }
 // getPatientsThree(): Observable<any[]> {
  //   return this.http.post(patientsThree)('/springdata/URL/HERE', '');
  // }
  getPatientsThree(): Observable<any[]>{
    return of(patientsThree);
  }
 // getPatientsFour(): Observable<any[]> {
  //   return this.http.post(patientsFour)('/springdata/URL/HERE', '');
  // }
  getPatientsFour(): Observable<any[]>{
    return of(patientsFour);
  }
 // getPatientsFive(): Observable<any[]> {
  //   return this.http.post(patientsFive)('/springdata/URL/HERE', '');
  // }
  getPatientsFive(): Observable<any[]>{
    return of(patientsFive);
  }
  getSpans(): string[]{
    return ["name"]};
  }

