import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  //Replace with Http constructor when connecting to Spring
  // constructor(private http: HttpClient) {}
  constructor() { }
  //For connecting to SpringData:
// createApt(): Observable<any[]> {
//   return this.http.post(appointment)('/springdata/URL/HERE', '');
// }
}
