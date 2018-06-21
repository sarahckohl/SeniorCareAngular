import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { patients }  from '../calendar/mock.data';

@Injectable({
  providedIn: 'root'
})
export class AvailableService {
  
  //Replace with Http constructor when connecting to Spring
  // constructor(private http: HttpClient) {}
  
    constructor() { }
//For connecting to SpringData:
// getPatients(): Observable<any[]> {
//   return this.http.post(patients)('/springdata/URL/HERE', '');
// }
    getPatients(): Observable<any[]>{
      return of(patients);
    }
  }
  
 