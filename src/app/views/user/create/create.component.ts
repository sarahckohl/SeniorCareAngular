import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor() { }
  create;

  ngOnInit() {
    this.create = new FormGroup({
      
      name: new FormControl(),
      age: new FormControl(),
      city: new FormControl(),
      meds: new FormControl(),
      careneed: new FormControl(),
      start: new FormControl(),
      end: new FormControl(),

    })
  }
  // get name() { return this.create.get('name'); }
  // get age() { return this.create.get('age'); }
  // get city() { return this.create.get('city'); }
  // get meds() { return this.create.get('meds'); }
  // get careneed() { return this.create.get('careneed'); }
  // get start() { return this.create.get('start'); }
  // get end() { return this.create.get('end'); }

  
  createAppointment() {
    console.log(this.create.value);  
  }
//   this.atService.createApt().subscribe((value) => {
//     console.log(value[0].name);
//           this.appointments = value;
// });
}

// onclick() {
//   console.log("Testingbutton");
// };