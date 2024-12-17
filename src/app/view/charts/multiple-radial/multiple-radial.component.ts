import { Component, ViewChild, ElementRef} from '@angular/core';
import { RadialOptions } from '../../../core/modules/types'; 


@Component({
  selector: 'app-multiple-radial',
  templateUrl: './multiple-radial.component.html',
  styleUrl: './multiple-radial.component.scss'
})
export class MultipleRadialComponent {
  @ViewChild('chart') chart!: ElementRef;

  public radialOptions: Partial<RadialOptions>;

  
  constructor() {
    this.radialOptions = {
      chart: {
        type: 'radialBar',
        height: 200,
        offsetX:0
      },
      series: [64, 73, 48], 
      labels: ['New', 'Recovered', 'In Progress '], 
      colors: ['#1F1F21', '#FEB011','#89CFFF'], 
    
      plotOptions: {
        radialBar: {

          dataLabels: {
            name: {
              fontSize: '5px', 
            },
            value: {
              fontSize: '10px', 
            },
            total: {
              show: true,
              label: '', 
              formatter: () => '' 
            }
          }
        }
      }
    };
  }
}
