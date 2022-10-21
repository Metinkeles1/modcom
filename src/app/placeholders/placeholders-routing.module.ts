import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceHoldersHomeComponent } from './place-holders-home/place-holders-home.component';

const routes: Routes = [
  { path: '', component: PlaceHoldersHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceholdersRoutingModule { }
