import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { RoverListComponent } from './components/gallery/rover-list/rover-list.component';
import { RoverService } from './services/rover.service';
import { PhotoDetailComponent } from './components/photo/photo-detail/photo-detail.component';
import { PhotoThumbnailComponent } from './components/photo/photo-thumbnail/photo-thumbnail.component';
import { RoverViewComponent } from './components/gallery/rover-view/rover-view.component';
import { SpinnerComponent } from './components/ui/spinner/spinner.component';
import { NotFoundPlaceholderComponent } from './components/ui/not-found-placeholder/not-found-placeholder.component';
import { PhotosService } from './services/photos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoverListComponent,
    PhotoDetailComponent,
    PhotoThumbnailComponent,
    RoverViewComponent,
    SpinnerComponent,
    NotFoundPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RoverService, PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
