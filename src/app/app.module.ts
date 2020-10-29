import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NameExtractorPipe } from './pipes/namePipe.pipe';
import { reducers } from './store/reducers';
import { AppDataService } from './services/app-data.service';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/products.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NameExtractorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers), // use this in selector
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
