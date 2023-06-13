import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-basic-chart-line',
  templateUrl: './basic-chart-line.component.html',
  styleUrls: ['./basic-chart-line.component.css']
})
export class BasicChartLineComponent {
  constructor(private service: DashboardService){ }

  actualCoords$ = this.service.relativePosition$
}
