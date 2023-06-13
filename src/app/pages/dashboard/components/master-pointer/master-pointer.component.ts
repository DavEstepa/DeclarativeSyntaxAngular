import { Component, ElementRef, ViewChild } from '@angular/core';
import { filter, fromEvent, map, switchMap, takeUntil, takeWhile, tap } from 'rxjs';
import { RelativePosition } from 'src/app/core/models/dashboard/state.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-master-pointer',
  templateUrl: './master-pointer.component.html',
  styleUrls: ['./master-pointer.component.css']
})
export class MasterPointerComponent {
  constructor(private service: DashboardService){}

  private drawingZone: string = 'drawing-screen'
  private drawingZoneActive: boolean = false
  @ViewChild('drawingScreen') element?: ElementRef;

  event$ = fromEvent(document, 'mousedown').pipe(
    filter(onMouseDown$ => this.evalClickDown(onMouseDown$)),
    switchMap(() => fromEvent(document, 'mousemove').pipe(
      takeUntil(fromEvent(document, 'mouseup')),
      map((val)=>this.updateResults(val)))
    )
  )

  evalClickDown(event: any): boolean{
    // console.log(event.srcElement.classList[0])
    if(event.srcElement.classList[0] == this.drawingZone || !this.drawingZoneActive) return true
    return false
  }

  updateResults(event: any): RelativePosition{
    this.drawingZoneActive = true //TODO: assign one time
    let origin = {left: 0, top:0, width:0, height:0}
    if(this.element){
      origin = this.element?.nativeElement.getBoundingClientRect();
    }
    // console.log(origin)
    // console.log(event.clientX - origin.left, event.clientY - origin.top)
    // return {x: event.clientX - origin.left, y: event.clientY - origin.top}
    let coordinates = getCoordinates(origin, event.clientX, event.clientY)
    this.service.updateRelativePosition({x: coordinates[0], y: coordinates[1]})
    return {x: coordinates[0], y: coordinates[1]}

  }
}

function getCoordinates(origin: {left: number, top:number, width:number, height:number}, 
                                 relativeX: number,
                                 relativeY: number)
{
  let x = relativeX - origin.left
  let y = relativeY - origin.top
  if(x > origin.width) x = origin.width
  if(x < 0) x = 0
  if(y > origin.height) y = origin.height
  if(y < 0) y = 0

  return [x, y]
}
