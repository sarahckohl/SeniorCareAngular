import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private httpClient:Http) { }
  create;
  productObj: object = {};

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

  createAppointment() {
    
   this.productObj = {
     "name" : "",
     "age" : "",
     "city" : "",
     "meds" : "",
     "careneed" : "",
     "start" : "",
     "end" : ""
   }
    console.log(this.create.value);  
    this.httpClient.get('http//localhost:3200/create', JSON.stringify(this.create.value));

  }


//    }
//    this.httpClient.post('http://localhost:3100/logininfo/', this.productObj)
//    .subscribe((res: Response) => {
//      console.log(res);
//    })


//   this.atService.createApt().subscribe((value) => {
//     console.log(value[0].name);
//           this.appointments = value;
// });
  }