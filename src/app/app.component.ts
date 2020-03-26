import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string=null;
  password:string=null;
  email:string=null;
city:string=null;
country:string=null;

userInputData="Shubham";
childdata;

mycss={'color':'red','background-color':'yellow'};

Text=true;
Text1=true;
Text2=true;

displayText(event){
  this.Text=false;
}

displayinfo(){
  this.Text1=false;
}
  InputBox(){
    this.Text2=false;
  }


}
