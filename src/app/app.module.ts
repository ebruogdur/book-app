import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './pages/page.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptorService } from './services/error-handling-interceptor.service';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PageModule
  ],
  providers: [

    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorHandlingInterceptorService,
      multi:true
    }




  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
