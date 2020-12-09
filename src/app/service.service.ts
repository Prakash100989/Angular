import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http : HttpClient) { }

  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }  

  //Patient
  getData(){  
    return this.http.get('/api/Patient');  //https://localhost:44352/ webapi host url  
  }  
  postData(formData){  
    return this.http.post('/api/Patient',formData);  
  }  
  putData(id,formData){  
    return this.http.put('/api/Patient/'+id,formData);  
  }  
  deleteData(id){  
    return this.http.delete('/api/Patient/'+id);  
  }

  // Doctor
  getDocData(){  
    return this.http.get('/api/Doctor');  //https://localhost:44352/ webapi host url  
  }  
  postDocData(formData){  
    return this.http.post('/api/Doctor',formData);  
  }  
  putDocData(id,formData){  
    return this.http.put('/api/Doctor/'+id,formData);  
  }  
  deleteDocData(id){  
    return this.http.delete('/api/Doctor/'+id);  
  }

  //Admin
  getAdminData(){  
    return this.http.get('/api/Admin');  //https://localhost:44352/ webapi host url  
  }  
  postAdminData(formData){  
    return this.http.post('/api/Admin',formData);  
  }  
  putAdminData(id,formData){  
    return this.http.put('/api/Admin/'+id,formData);  
  }  
  deleteAdminData(id){  
    return this.http.delete('/api/Admin/'+id);  
  }


}
