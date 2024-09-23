import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component'; // Root component of your app

@NgModule({
  declarations: [
    AppComponent,  // Declare your app's root component
    // Add more components here as you create them
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Import HttpClientModule to enable HTTP services
  ],
  providers: [],  // You can add services here if necessary
  bootstrap: [AppComponent]  // Bootstrap the root component
})
export class AppModule { }
