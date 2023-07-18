import { Component } from '@angular/core';
import { fromEvent, map, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-push-arrow-keys',
  templateUrl: './push-arrow-keys.component.html',
  styleUrls: ['./push-arrow-keys.component.css']
})
export class PushArrowKeysComponent {
  currentSelectedElement!: HTMLElement
  event$ = fromEvent(document, 'keydown').pipe(
    map((val)=>this.moveObjective(val))
  )

  moveObjective(event: any){
    console.log(event)
    if(this.currentSelectedElement){
      console.log(window.getComputedStyle(this.currentSelectedElement).top)
      let actualVal = window.getComputedStyle(this.currentSelectedElement).top
      let newPosition = parseInt(actualVal.replace('px', ''), 10) + 1
      this.currentSelectedElement.style.top = newPosition.toString() + 'px'
    }
    return event
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
}
