import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatGridListModule, MatCardModule, MatFormFieldModule,MatInputModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddpersonComponent } from './components/addperson/addperson.component';
import { AllpersonsComponent } from './components/allpersons/allpersons.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddpersonComponent,
    AllpersonsComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
