import { Component, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  isClassVisible:boolean= false;
  showMenu:boolean = false;
  showLogout:boolean = false;
  onClickedOutside(e: Event) {
    this.showLogout = false;
    this.showMenu = false;
  }
}
