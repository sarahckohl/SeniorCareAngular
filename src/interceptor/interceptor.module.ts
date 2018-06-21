import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs'
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin','http://ec2-18-218-58-237.us-east-2.compute.amazonaws.com:8087/seniorcare/') });
    return next.handle(dupReq);
  }
};


@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
  ]
})
export class InterceptorModule { }
