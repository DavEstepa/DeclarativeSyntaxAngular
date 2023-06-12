import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { RelativePosition } from 'src/app/core/models/dashboard/state.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private relativePositionSubject = new Subject<RelativePosition>();
  relativePositionAction$ = this.relativePositionSubject.asObservable();
  
  relativePosition$ = this.relativePositionAction$.pipe(tap(console.log))
  constructor() { }

  updateRelativePosition(newCoords: RelativePosition){
    this.relativePositionSubject.next(newCoords);
  }
}
