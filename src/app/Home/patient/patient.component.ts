import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';  
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  public newTime: string = '13:30';
  time = { hour: 13, minute: 30 };

  constructor(public router: Router, private ServiceService: ServiceService) {}
  data: any;  
  PatForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save"; 

  ngOnInit(): void {
    this.getdata();  
  
    this.PatForm = new FormGroup({  
      id: new FormControl(null),  
      appoinmentDate: new FormControl("",[Validators.required]),        
      appoinmentTime: new FormControl("",[Validators.required]),  
      location:new FormControl("",[Validators.required]),  
      doctor: new FormControl("",[Validators.required]),  
    })    
  }

  getdata() {  
    this.ServiceService.getData().subscribe((data: any[]) => {  
      this.data = data;  
    })  
  }  
  deleteData(id) {  
    this.ServiceService.deleteData(id).subscribe((data: any[]) => {  
      this.data = data;  
      this.getdata();  
    })  
  }  
  Save() {   
    debugger
    this.submitted = true;  
    
     if (this.PatForm.invalid) {  
            return;  
     }  
    this.ServiceService.postData(this.PatForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
  
    })  
  }  
  Update() {   
    this.submitted = true;  
    
    if (this.PatForm.invalid) {  
     return;  
    }        
    this.ServiceService.putData(this.PatForm.value.ID,this.PatForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditData(Data) {  
    this.PatForm.controls["id"].setValue(Data.id);  
    this.PatForm.controls["appoinmentDate"].setValue(Data.appoinmentDate);      
    this.PatForm.controls["appoinmentTime"].setValue(Data.appoinmentTime);  
    this.PatForm.controls["location"].setValue(Data.location);  
    this.PatForm.controls["doctor"].setValue(Data.doctor);  
    this.EventValue = "Update";  
  }  
  
  resetFrom()  
  {     
    this.getdata();  
    this.PatForm.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  } 

  onTimeChange(value: { hour: string, minute: string }) {
    console.log(value)
    this.newTime = `${value.hour}:${value.minute}`;
  }

}
