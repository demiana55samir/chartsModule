import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { RadialComponent } from './radial/radial.component';
import { MultipleRadialComponent } from './multiple-radial/multiple-radial.component';


@NgModule({
  declarations: [
    LineComponent,
    RadialComponent,
    MultipleRadialComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ],
  exports: [
    LineComponent,
    RadialComponent,
    MultipleRadialComponent
  ],
})
export class ChartsModule { }
