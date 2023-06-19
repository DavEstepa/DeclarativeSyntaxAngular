import { Component, OnInit, OnChanges } from '@angular/core';
import { NavigationOption } from './core/models/core/nav-options.model';
import { options } from 'src/app/core/helpers/variables/nav-options'
import { NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showOptions = true;
  title = 'declarative-syntax-study';
  options: NavigationOption[] = options;
  selectedOption?: NavigationOption;

  faCoffee = faCoffee;
  
  eventRouter$ = this.router.events.pipe(
    map((props) => this.catchNavigation(props))
  )

  constructor(private router: Router){
  }

  toggleOptions(event: any){
    console.log('Header Clicked!!! Received in App Module.')
    this.showOptions = !this.showOptions
  }

  evalActivatedOption(option: NavigationOption): boolean{
    return (this.router.url == option.path)?true:false
  }

  selectOption(option: NavigationOption){
    this.selectedOption = option
  }

  catchNavigation(props: any){
    if(props instanceof NavigationEnd){
      console.log('Navigation Complete!!!')
      this.selectedOption = this.options.filter((op: NavigationOption)=> op.path == props.urlAfterRedirects)[0]
    }
    return true
  }
}
