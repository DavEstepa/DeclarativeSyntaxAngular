import { Component } from '@angular/core';

@Component({
  selector: 'app-fontawesome-icons',
  templateUrl: './fontawesome-icons.component.html',
  styleUrls: ['./fontawesome-icons.component.css']
})
export class FontawesomeIconsComponent {
  loadingList: boolean = true
  constructor(){
    console.log('inicio container')
  }
}
