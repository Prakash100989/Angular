import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';  
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  public newTime: string = '13:30';
  time = { hour: 13, minute: 30 };

  constructor(public router: Router, private ServiceService: ServiceService) { }
  data: any;  
  DocForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save";

  ngOnInit(): void {
    this.getDocdata();  
  
    this.DocForm = new FormGroup({  
      id: new FormControl(null),  
      appoinmentDate: new FormControl("",[Validators.required]),        
      appoinmentTime: new FormControl("",[Validators.required]),  
      location:new FormControl("",[Validators.required]),  
      status: new FormControl("",[Validators.required]),  
    })  
  }

  getDocdata() {  
    this.ServiceService.getData().subscribe((data: any[]) => {  
      this.data = data;  
    })  
  }  
  deleteDocData(id) {  
    this.ServiceService.deleteData(id).subscribe((data: any[]) => {  
      this.data = data;  
      this.getDocdata();  
    })  
  }  
  Save() {   
    debugger
    this.submitted = true;  
    
     if (this.DocForm.invalid) {  
            return;  
     }  
    this.ServiceService.postDocData(this.DocForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
  
    })  
  }  
  Update() {   
    this.submitted = true;  
    
    if (this.DocForm.invalid) {  
     return;  
    }        
    this.ServiceService.putDocData(this.DocForm.value.ID,this.DocForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditDocData(Data) {  
    this.DocForm.controls["id"].setValue(Data.id);  
    this.DocForm.controls["appoinmentDate"].setValue(Data.appoinmentDate);      
    this.DocForm.controls["appoinmentTime"].setValue(Data.appoinmentTime);  
    this.DocForm.controls["location"].setValue(Data.location);  
    this.DocForm.controls["status"].setValue(Data.status);  
    this.EventValue = "Update";  
  }  
  
  resetFrom()  
  {     
    this.getDocdata();  
    this.DocForm.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  } 

  onTimeChange(value: { hour: string, minute: string }) {
    console.log(value)
    this.newTime = `${value.hour}:${value.minute}`;
  }


}
