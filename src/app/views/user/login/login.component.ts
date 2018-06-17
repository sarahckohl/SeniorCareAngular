import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';


import { routing } from '../../../app.routing';
import { LoginService } from '../../../services/user.service';
import { User } from '../../../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  loginForm;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username : new FormControl(),
      password : new FormControl(),
    });
  }

}
