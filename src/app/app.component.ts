import { Component, ViewChild, ElementRef} from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions:ApexPlotOptions;
  labels?: string[];
  fill:ApexFill;
  stroke:ApexStroke | undefined;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'charts-mod';

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
