import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { RelativePosition } from 'src/app/core/models/dashboard/state.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private relativePositionSubject = new Subject<RelativePosition>();
  private relativePositionAction$ = this.relativePositionSubject.asObservable();
  
  relativePosition$ = this.relativePositionAction$.pipe(tap(console.log))
  constructor() { console.info('DashboardService Initialized') }

  updateRelativePosition(newCoords: RelativePosition){
    this.relativePositionSubject.next(newCoords);
  }
}
