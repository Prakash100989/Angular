import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { SignupComponent } from './SignUp/signup/signup.component';
import { PatientComponent } from './Home/patient/patient.component';
import { DoctorComponent } from './Home/doctor/doctor.component';

const routes: Routes = [
  {path:'', redirectTo:'HomePage', pathMatch:'full'},   
  { path: 'HomePage', component: HomePageComponent },
  { path: 'SignUp',  component: SignupComponent},
  { path: 'Patient', component: PatientComponent},
  { path: 'Doctor', component: DoctorComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '/HomePage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

