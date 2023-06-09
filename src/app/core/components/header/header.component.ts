import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter();
  toggleOptions(){
    console.log('Title Clicked!!!')
    this.toggleSidenav.emit(true)
  }
}
