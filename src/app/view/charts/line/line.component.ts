import { Component, ViewChild, ElementRef} from '@angular/core';
import { ChartOptions } from '../../../core/modules/types';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent {
  @ViewChild('chart') chart!: ElementRef;

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'line',
        width:300
      },
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 20, 70, 91, 100,101],
          color:"purple"
        },
        {
          name: 'revenue', 
          data: [150, 110, 25, 90, 75, 55, 65, 85, 160,165],
          color:"green"
        }
    ],
      xaxis: {
        categories: ['week 01','week 02','week 03','week 04','week 05','week 06','week 07', 'week 08','week 09','week 10']
      },
      stroke: {
        curve: 'smooth',
      }
  }
}
}
