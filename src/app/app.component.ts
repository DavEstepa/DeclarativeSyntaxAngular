import { Component, OnInit, OnChanges } from '@angular/core';
import { NavigationOption } from './core/models/core/nav-options.model';
import { options } from 'src/app/core/helpers/variables/nav-options'
import { NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';

import { IconDefinition, faChartLine, faHouse, faRectangleList, faCode } from '@fortawesome/free-solid-svg-icons';

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
  avilableIcons: IconDefinition[] = [faChartLine, faHouse, faRectangleList]
  faCode = faCode;
  
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

  selectIcon(option: NavigationOption){
    return this.avilableIcons.filter(ic => ic.iconName == option.iconName)[0]
  }

  catchNavigation(props: any){
    if(props instanceof NavigationEnd){
      console.log('Navigation Complete!!!')
      this.selectedOption = this.options.filter((op: NavigationOption)=> op.path == props.urlAfterRedirects)[0]
    }
    return true
  }
}
