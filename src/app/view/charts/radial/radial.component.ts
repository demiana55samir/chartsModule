import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DonutOptions } from '../../../core/modules/types';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrl: './radial.component.scss'
})
export class RadialComponent {
  @ViewChild('chart') chart!: ElementRef;

  public donutOptions: Partial<DonutOptions>;

  constructor() {
    this.donutOptions = {
      series: [80, 25, 40, 55],
      chart: {
        type: 'donut',
        width: 300,
      },
      labels: [
        'Financial Audits',
        'Compliance Audits',
        'Operational Audits',
        'Others Audits',
      ],
      fill: {
        colors: ['#1C1C2C', '#A9A9A9',  '#F5F0F0','#89CFF0'],
        opacity: 0.9,
        type: 'solid',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      title: {
        text: 'Risk Rates',
      },
      yaxis: {
        reversed: true,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              total: {
                show: true,
                label: '',
                formatter: () => '',
              },
            },
          },
        },
      },
      dataLabels:{
        enabled:false
      }
    };
  }
}
