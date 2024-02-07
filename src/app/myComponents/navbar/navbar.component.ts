import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  btn1: String = '';
  btn2:String=""
  constructor(private ref: AppComponent) {}
  ngOnInit() {
    this.btn1 = this.ref.nav_Btn1;
    this.btn2 = this.ref.nav_Btn2;
  }
}
