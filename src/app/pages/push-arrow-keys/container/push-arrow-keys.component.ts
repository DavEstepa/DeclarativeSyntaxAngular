import { Component } from '@angular/core';
import { filter, fromEvent, map, switchMap, takeUntil, tap } from 'rxjs';
import { PushArrowKeysService } from '../services/push-arrow-keys.service';
import { PauseOptions } from 'src/app/core/helpers/enums/pause-options';

@Component({
  selector: 'app-push-arrow-keys',
  templateUrl: './push-arrow-keys.component.html',
  styleUrls: ['./push-arrow-keys.component.css']
})
export class PushArrowKeysComponent {
  constructor(private service: PushArrowKeysService){}
  
  currentSelectedElement!: HTMLElement
  moving = false
  options = PauseOptions
  event$ = fromEvent(document, 'keydown').pipe(
    filter(()=>this.currentSelectedElement?true:false),
    tap((val)=>this.moveObjective(val))
  )

  moveObjective(event: any){
    console.log(event)
    console.log(window.getComputedStyle(this.currentSelectedElement).top)
    let actualVal = window.getComputedStyle(this.currentSelectedElement).top
    let newPosition = parseInt(actualVal.replace('px', ''), 10) + 1
    this.currentSelectedElement.style.top = newPosition.toString() + 'px'
  }

  getArray(clouds: number): number[] {
    const count = clouds
    const arr = []
    for (let i = 1; i <= count; i++) {
      arr.push(i)
    }
    return arr
  }

  selectDiv(event: any){
    this.currentSelectedElement = event.target as HTMLElement;
    console.log(window.getComputedStyle(this.currentSelectedElement).left)
  }

  toggleControl(event: PauseOptions){
    switch (event) {
      case PauseOptions.Continue:
        this.service.showScrollBar(false)
        this.moving = true
        break;
      case PauseOptions.Settings:
        console.log("Settings Opened!!!")
        break;
      case PauseOptions.Restart:
        console.log("Restart Opened!!!")
        break;
      case PauseOptions.Pause:
        this.service.showScrollBar(true)
        this.moving = false
        break;
      default:
        break;
    }
  }
}
