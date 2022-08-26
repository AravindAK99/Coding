import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { PagesModule } from './modules/pages/pages.module';
import { AdminModule } from './modules/admin/admin.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './shared/services/auth-http.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { BatchmanagerModule } from './modules/batchmanager/batchmanager.module';
import { StudentModule } from './modules/student/student.module';

@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    SharedModule,
    PagesModule,
    AdminModule,
    BatchmanagerModule,
    StudentModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SharedModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor , multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
