import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoverListComponent } from './components/gallery/rover-list/rover-list.component';
import { PhotoDetailComponent } from './components/photo/photo-detail/photo-detail.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: RoverListComponent
  },
  {
    path: 'view-photo',
    component: PhotoDetailComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'view-photo/:iod',
    component: PhotoDetailComponent,
    runGuardsAndResolvers: 'always'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
