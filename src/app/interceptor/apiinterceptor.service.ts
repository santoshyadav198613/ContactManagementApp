import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class ApiinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    if (req.method === 'POST') {
      let newRequest = req.clone({ headers: req.headers.set('userValue', 'sadsadsad') });
      console.log(newRequest);
      return next.handle(newRequest);
    }
    return next.handle(req);
  }

}
