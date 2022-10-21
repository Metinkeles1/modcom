import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceHoldersHomeComponent } from './place-holders-home/place-holders-home.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    PlaceHoldersHomeComponent,
    PlaceholdersComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule,
    SharedModule
  ],
  exports: [
    // PlaceHoldersHomeComponent
  ]
})
export class PlaceholdersModule { }
