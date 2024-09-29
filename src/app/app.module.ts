import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@NgModule({
  declarations: [
    HomeComponent,
    HousingLocationComponent, // Non-standalone component
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    HomeComponent,
    HousingLocationComponent, // Non-standalone component
  ],
})
export class AppModule {}
