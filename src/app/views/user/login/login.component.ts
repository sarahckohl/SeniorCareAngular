import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers} from '@angular/http';

import { routing } from '../../../app.routing';
import { LoginService } from '../../../services/user.service';
import { User } from '../../../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient:Http) { }

  usename;
  passname;
  loginForm;
  productObj: object = {};

  ngOnInit() {
    this.loginForm = new FormGroup({
      username : new FormControl(),
      password : new FormControl(),
    });
  }

  onSubmit(){
    console.log(this.loginForm.value.username);
    console.log("before request sent");
    /*this.httpClient.get('http://localhost:3100/logininfo', JSON.stringify(this.loginForm.value));*/
      
    /*this.httpClient.get('http://localhost:8082/seniorcare/login').subscribe(
        (res: Response) =>{
          console.log(res);
        }
      ) */

      this.httpClient.get(`http://ec2-18-217-188-38.us-east-2.compute.amazonaws.com:8087/seniorcare/login?username=${this.loginForm.value.username}&password=${this.loginForm.value.password}`).subscribe(
        (res: Response) =>{
          console.log(res);
         

        }
      )
  
   /*
   this.productObj = {
    "username" : "zack",
    "password" : "qwerty1"
  }
  this.httpClient.post('http://localhost:3100/logininfo/', this.productObj)
  .subscribe((res: Response) => {
    console.log(res);
  })
*/
  }

  setProfile(){
    this.productObj = {
      "username" : "zack",
      "password" : "qwerty1"
    }
    this.httpClient.post('http://localhost:3100/logininfo/', this.productObj)
    .subscribe((res: Response) => {
      console.log(res);
    })

  }
    
    

  





}
