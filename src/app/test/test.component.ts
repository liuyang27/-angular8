import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myid="testid";
  myclass="classa";
  mycolor="blue";

  greeting1="";
  greeting2="";

  name="";
  tf=false;

  titlestyle={
    color:"blue",
    fontStyle:"italic"
  }
  onclick(event){
    console.log(event);
    this.greeting1="welcome!!";
    this.greeting2=event.type;
  }

  colorarray=["red","blue","yellow","black","white"]
  
  logmsg(val){
    console.log(val);
  }

  @Input() public myparentData;
  // or @Input('myparentData') public name2;

  @Output() public mychildevent =new EventEmitter();

  fireEvent(){
    this.mychildevent.emit('Hey LY~');
  }
  constructor() { }

  ngOnInit() {
  }

}
