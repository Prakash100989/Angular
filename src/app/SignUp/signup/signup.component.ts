import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';  
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(public router: Router, private ServiceService: ServiceService) { }
  data: any;  
  AdminForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save";

  ngOnInit(): void {
    this.getAdmindata();  
  
    this.AdminForm = new FormGroup({  
      id: new FormControl(null),  
      firstName: new FormControl("",[Validators.required]),        
      lastName: new FormControl("",[Validators.required]),  
      email:new FormControl("",[Validators.required]),  
      mobile: new FormControl("",[Validators.required]), 
      dob: new FormControl("",[Validators.required]), 
      password: new FormControl("",[Validators.required]), 
      location: new FormControl("",[Validators.required]),  
    })  
  }

  getAdmindata() {  
    this.ServiceService.getData().subscribe((data: any[]) => {  
      this.data = data;  
    })  
  }  
  deleteAdminData(id) {  
    this.ServiceService.deleteData(id).subscribe((data: any[]) => {  
      this.data = data;  
      this.getAdmindata();  
    })  
  }  
  Save() {   
    debugger
    this.submitted = true;  
    
     if (this.AdminForm.invalid) {  
            return;  
     }  
    this.ServiceService.postAdminData(this.AdminForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
  
    })  
  }  
  Update() {   
    this.submitted = true;  
    
    if (this.AdminForm.invalid) {  
     return;  
    }        
    this.ServiceService.putAdminData(this.AdminForm.value.ID,this.AdminForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditDocData(Data) {  
    this.AdminForm.controls["id"].setValue(Data.id);  
    this.AdminForm.controls["appoinmentDate"].setValue(Data.appoinmentDate);      
    this.AdminForm.controls["appoinmentTime"].setValue(Data.appoinmentTime);  
    this.AdminForm.controls["location"].setValue(Data.location);  
    this.AdminForm.controls["status"].setValue(Data.status);  
    this.EventValue = "Update";  
  }  
  
  resetFrom()  
  {     
    this.getAdmindata();  
    this.AdminForm.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  } 


  
}
