import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { SignupComponent } from './SignUp/signup/signup.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './Home/patient/patient.component';
import { DoctorComponent } from './Home/doctor/doctor.component';

import { HttpClientModule }    from '@angular/common/http';  
import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    PatientComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
