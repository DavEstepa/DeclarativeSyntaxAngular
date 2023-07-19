import { Component, EventEmitter, Output } from '@angular/core';
import { filter, fromEvent, map, switchMap, takeUntil, tap } from 'rxjs';
import { PauseOptions } from 'src/app/core/helpers/enums/pause-options';

@Component({
  selector: 'app-general-scene',
  templateUrl: './general-scene.component.html',
  styleUrls: ['./general-scene.component.css']
})
export class GeneralSceneComponent {
  currentSelectedElement!: HTMLElement

  @Output() controlScene: EventEmitter<any> = new EventEmitter();
  pause(){
    this.controlScene.emit(PauseOptions.Pause)
  }

  event$ = fromEvent(document, 'keydown').pipe(
    tap((val)=>this.moveObjective(val))
  )

  
  moveObjective(event: any){
    if(this.currentSelectedElement){
      console.log(event)
      console.log(window.getComputedStyle(this.currentSelectedElement).top)
      let actualVal = window.getComputedStyle(this.currentSelectedElement).top
      let newPosition = parseInt(actualVal.replace('px', ''), 10) + 1
      this.currentSelectedElement.style.top = newPosition.toString() + 'px'
    }
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
