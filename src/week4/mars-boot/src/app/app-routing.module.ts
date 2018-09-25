import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoversGalleryComponent } from './rovers-gallery/rovers-gallery.component';
import { RoversDayComponent } from './rovers-day/rovers-day.component';

const routes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'gallery', component: RoversGalleryComponent },
  { path: 'day', component: RoversDayComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


