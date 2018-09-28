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
    component: PhotoDetailComponent
  },
  {
    path: 'view-photo/:iod',
    component: PhotoDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
