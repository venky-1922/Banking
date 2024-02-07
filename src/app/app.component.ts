import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banking';
   nav_Btn1:String="SignIn";
   nav_Btn2:String="SignUp";
   home_Btn1:String="Try Now";
   home_Btn2:String="Learn More";
}
