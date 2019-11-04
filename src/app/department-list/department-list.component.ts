import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list
    </p>
    <ul>
      <li (click)="onselect(d)" [class.selected]="isSelected(d)" *ngFor="let d of departments">
        {{d.id}}. {{d.name}}
      </li>
    </ul>
  `,
  styles: [`
  class.selected{
    background-color: #CFD8DC;
    color: white;
}
  `]
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}
  ]
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    });
  }
  onselect(dept){
    //this.router.navigate(['/departments',dept.id]);
    this.router.navigate([dept.id],{relativeTo:this.route});
  }

  isSelected(d){
    return d.id===this.selectedId;
  }

}
