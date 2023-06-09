import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showOptions = true;
  title = 'declarative-syntax-study';

  toggleOptions(event: any){
    console.log('Header Clicked!!! Received in App Module.')
    this.showOptions = !this.showOptions
  }
}
