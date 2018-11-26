import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RoverComponent } from './rover/rover.component';
import { RoversGalleryComponent } from './rovers-gallery/rovers-gallery.component';
import { RoversDayComponent } from './rovers-day/rovers-day.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      RoverComponent,
      RoversGalleryComponent,
      RoversDayComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
