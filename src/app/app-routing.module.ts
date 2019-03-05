import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {BarDetailsComponent} from './bar-details/bar-details.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsComponent } from './items/items.component';
import { InsightComponent } from './insight/insight.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { ModificationComponent } from './modification/modification.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bars'
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'items',
    pathMatch: 'full',
    component: ItemsComponent
  },
  {
    path: 'items/:item',
    pathMatch: 'full',
    component: ItemDetailsComponent
  },
  {
    path: 'insight',
    pathMatch:'full',
    component: InsightComponent
  },
  {
    path: 'drinker',
    pathMatch:'full',
    component: DrinkersComponent
  },
  {
    path: 'drinker/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'mod',
    pathMatch: 'full',
    component: ModificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
