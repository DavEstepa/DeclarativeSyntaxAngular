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
  timeWindow = false

  ngOnInit() {
    this.updateDataChart()
    this.updateOptionsChart()
  }

  selectedData(event: any){
    console.log(event)
    this.service.updateStudyPosition(event)
  }

  toggleTimeWindows(){
    this.timeWindow = !this.timeWindow
  }

  updateLineChart(newCoords: RelativePosition){
    if(this.labels.length >50 && this.timeWindow){
      this.coords.x.shift()
      this.coords.y.shift()
      this.labels.shift()
      this.coords.x.push(newCoords.x)
      this.coords.y.push(newCoords.y)
      this.labels.push(this.labels[this.labels.length - 1] + 1)
    }
    else{
      this.coords.x = [...this.coords.x, newCoords.x]
      this.coords.y = [...this.coords.y, newCoords.y]
      let newLabelValue = this.labels.length == 0?0:(this.labels[this.labels.length - 1] + 1)
      this.labels = [...this.labels, newLabelValue]
    }

    this.updateDataChart()
    return newCoords
  }

  resetChart(){
    console.log('Chart reset')
    this.coords = {x: [], y: []}
    this.labels = []
    this.updateDataChart()
  }

  updateDataChart(){
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = {
        labels: this.labels,
        datasets: [
            {
                label: 'Posición Horizontal',
                data: this.coords.x,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--primary-color'),
                tension: 0.4
            },
            {
                label: 'Posición Vertical',
                data: this.coords.y,
                fill: false,
                borderColor: '#f44336',
                tension: 0.4
            }
        ]
      }
  }

  updateOptionsChart(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.options = {
          animation: {
            duration: 0
        },
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
    }
  }
}
