import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  btn1: String = '';
  btn2:String=""
  constructor(private ref: AppComponent) {}
  ngOnInit() {
    this.btn1 = this.ref.home_Btn1;
    this.btn2 = this.ref.home_Btn2;
  }
}
