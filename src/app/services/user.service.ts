import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  
  constructor(private http: HttpClient) { }
  user: User;
  //execute login fuction from login component
  login(username: string, password: string): Observable<User> {
    //insert spring local host address below
    return this.http.post<User>(`http://ourspringlocalhostaddresshere`, '')
  }
 
}
