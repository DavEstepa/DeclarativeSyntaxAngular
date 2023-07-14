import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { map } from 'rxjs';
import { RelativePosition } from 'src/app/core/models/dashboard/state.model';

@Component({
  selector: 'app-basic-chart-pie',
  templateUrl: './basic-chart-pie.component.html',
  styleUrls: ['./basic-chart-pie.component.css']
})
export class BasicChartPieComponent {
  constructor(private service: DashboardService){}

  selectedCoords$ = this.service.studyPositionAction$.pipe(
    map((newCoords: RelativePosition)=>this.updateSelectedCoord(newCoords))
  )

  updateSelectedCoord(newCoords: RelativePosition){
    return newCoords
  }
}
