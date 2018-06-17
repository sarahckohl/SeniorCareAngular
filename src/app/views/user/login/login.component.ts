import { Component, OnInit } from '@angular/core';
import { routing } from '../../../app.routing';
import { LoginService } from '../../../services/user.service';
import { User } from '../../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

}
