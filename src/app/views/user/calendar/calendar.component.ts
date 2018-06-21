import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patientsNine } from './mock.data';
import { CalendarService } from './calendar.service';
import { Observable } from 'rxjs/internal/Observable';
import { routing } from '../../../app.routing';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  patientsNine: any[];
  patientsTen: any[];
  patientsEleven: any[];
  patientsTwelve: any[];
  patientsOne: any[];
  patientsTwo: any[];
  patientsThree: any[];
  patientsFour: any[];
  patientsFive: any[];

  span: string[];
  constructor(private atService: CalendarService ) {}
 
  ngOnInit() {
    this.span = this.atService.getSpans(); 
    
    this.atService.getPatientsNine().subscribe((value) => {
      this.patientsNine = value;
    });

    this.atService.getPatientsTen().subscribe((value) => {
      console.log(value[0].name);
      this.patientsTen = value;
    });

    this.atService.getPatientsEleven().subscribe((value) => {
      console.log(value[0].name);
      this.patientsEleven = value;
    });

    this.atService.getPatientsTwelve().subscribe((value) => {
      console.log(value[0].name);
      this.patientsTwelve = value;
    });

    this.atService.getPatientsOne().subscribe((value) => {
      console.log(value[0].name);
      this.patientsOne = value;
    });
    this.atService.getPatientsTwo().subscribe((value) => {
      console.log(value[0].name);
      this.patientsTwo = value;
    });

    this.atService.getPatientsThree().subscribe((value) => {
      console.log(value[0].name);
      this.patientsThree = value;
    });

    this.atService.getPatientsFour().subscribe((value) => {
      console.log(value[0].name);
      this.patientsFour = value;
    });

    this.atService.getPatientsFive().subscribe((value) => {
      console.log(value[0].name);
      this.patientsFive = value;
    });
  }


}

