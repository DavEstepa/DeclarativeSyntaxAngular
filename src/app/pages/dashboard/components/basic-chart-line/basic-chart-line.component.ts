import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { map } from 'rxjs';
import { RelativePosition } from 'src/app/core/models/dashboard/state.model';

@Component({
  selector: 'app-basic-chart-line',
  templateUrl: './basic-chart-line.component.html',
  styleUrls: ['./basic-chart-line.component.css']
})
export class BasicChartLineComponent implements OnInit {
  constructor(private service: DashboardService){ }

  actualCoords$ = this.service.relativePosition$.pipe(
    map((newCoords: RelativePosition)=>this.updateLineChart(newCoords))
  )

  data: any
  coords: {x: number[], y: number[]} = {x: [], y: []}
  labels: number[] = []
  options: any

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.labels,
      datasets: [
          {
              label: 'Posición Horizontal',
              data: this.coords.x,
              fill: false,
              borderColor: '#3f51b5',
              tension: 0.4
          },
          {
              label: 'Posición Vertical',
              data: this.coords.y,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--pink-500'),
              tension: 0.4
          }
      ]
    };

    

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
  }

  updateLineChart(newCoords: RelativePosition){
    const documentStyle = getComputedStyle(document.documentElement);
    this.coords.x = [...this.coords.x, newCoords.x]
    this.coords.y = [...this.coords.y, newCoords.y]
    this.labels = [...this.labels, this.coords.x.length]
    this.data = {
      labels: this.labels,
      datasets: [
          {
              label: 'Posición Horizontal',
              data: this.coords.x,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
          },
          {
              label: 'Posición Vertical',
              data: this.coords.y,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--pink-500'),
              tension: 0.4
          }
      ]
    };
    return newCoords
  }

  resetChart(){
    console.log('Chart reset')
    const documentStyle = getComputedStyle(document.documentElement);
    this.coords = {x: [], y: []}
    this.labels = []
    this.data = {
      labels: this.labels,
      datasets: [
          {
              label: 'Posición Horizontal',
              data: this.coords.x,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
          },
          {
              label: 'Posición Vertical',
              data: this.coords.y,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--pink-500'),
              tension: 0.4
          }
      ]
    };
  }
}
