import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms'

import {ProfileComponent} from './component/profile.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent , ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
