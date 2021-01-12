import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingInterceptorService implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError(err=>{
      if(err.status=="400"){
        alert("sayfa bulunamadı");
      }
      else{
        alert("bir hata meydana geldi . daha sonra tekrar deneyiniz.");
      }

      this.router.navigateByUrl("/");
      return throwError(err);

    })


    );

    throw new Error('Method not implemented.');

  }

  constructor(private router:Router) { }
}
