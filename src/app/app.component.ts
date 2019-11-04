import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(readonly myroute:Router,private _enrollmentService:EnrollmentService){

  }
  title = 'Welcome to my-app';
  name="LY";
  msgfromcomp="";
  person={
    "firstname":"John",
    "lastname":"Doe"
  }
  date = new Date();
  goDepartments(){
    this.myroute.navigate(['/departments']);
  }
  goEmployees(){
    this.myroute.navigate(['/employees']);
  }
 
  userModel = new User('Rob','123',false,'SG','nus',5555);

  onSubmit(){
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
        .subscribe(
          data=>console.log("success!",data),
          error=>console.log("Error",error)
        )
  }



}


