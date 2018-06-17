import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register-nurse',
  templateUrl: './register-nurse.component.html',
  styleUrls: ['./register-nurse.component.css']
})
export class RegisterNurseComponent implements OnInit {

  constructor() { }

  registerNurseForm;

  ngOnInit() {
    this.registerNurseForm = new FormGroup({


    });
  }

}
