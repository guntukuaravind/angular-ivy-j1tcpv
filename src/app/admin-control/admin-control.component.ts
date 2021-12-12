import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';


import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent implements OnInit {

  form: any = {
    adminName: null,
    adminEmail: null,
    adminCode : null,
    password: null

  };
  showAdminControlBoard = false
  constructor(private _enrollmentService:EnrollmentService ) { }
  ngOnInit(): void {
    
    this.showAdminControlBoard = true;
   
  }
  adminModel = new Admin('om','om@gmail.com','ABVJ',456);
  authService: any;
  
  onSubmit(): void {
    const { adminName, adminEmail,adminCode,password } = this.form;

    this.authService.adminControl(adminName,adminEmail,adminCode,password).subscribe(
      (      data: any) => {
        this.showAdminControlBoard = false;
        this.showAdminControlBoard = true;
        
      });

      this._enrollmentService.enroll(this.adminModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error),
    )
  }
} 

  
  
  
  
      
   
   