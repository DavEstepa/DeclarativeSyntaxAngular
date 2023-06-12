import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, switchMap, takeUntil, tap } from 'rxjs';
import { RelativePosition } from 'src/app/core/models/dashboard/state.model';

@Component({
  selector: 'app-master-pointer',
  templateUrl: './master-pointer.component.html',
  styleUrls: ['./master-pointer.component.css']
})
export class MasterPointerComponent {
  @ViewChild('drawingScreen') element?: ElementRef;

  event$ = fromEvent(document, 'mousedown').pipe(
    switchMap(() => fromEvent(document, 'mousemove').pipe(
      takeUntil(fromEvent(document, 'mouseup')),
      map((val)=>this.updateResults(val))
      )
    )
  )

  updateResults(event: any): RelativePosition{
    if(this.element){
      const {x, y} = this.element?.nativeElement.getBoundingClientRect();
      console.log(x, y)
    }
    console.log(event)
    return {x: event.clientX, y: event.clientY}
  }
}
