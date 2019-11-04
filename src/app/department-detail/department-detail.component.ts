import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with ID {{departmentId}}</h3>
    <div>
      <button (click)="gotoOverview()">overview</button>
      <button (click)="gotoContact()">contact</button>
    </div>
    <router-outlet></router-outlet>
    <hr/>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    <div>
        <button (click)="gotoDepartments()">Back</button>
    </div>
    `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    });
  }

  goPrevious(){
    let previousId=this.departmentId-1;
    this.router.navigate(['/departments',previousId]);
  }
  goNext(){
    let nextId=this.departmentId+1;
    this.router.navigate(['/departments',nextId]);
  }
  gotoDepartments(){
    let seletedId=this.departmentId ? this.departmentId:null;
    //this.router.navigate(['/departments',{id:seletedId,test:"aaaa"}]); //absolute navigation

    //relative navigation
    this.router.navigate(['../',{id:seletedId,test:"aaaa"}],{relativeTo:this.route});
  }
  gotoOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  gotoContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }


}
