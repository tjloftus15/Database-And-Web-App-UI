import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DropdownModule} from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { InsightComponent } from './insight/insight.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { ModificationComponent } from './modification/modification.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    ItemDetailsComponent,
    ItemsComponent,
    InsightComponent,
    DrinkersComponent,
    DrinkerDetailsComponent,
    ModificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
