import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    ListHomeComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }