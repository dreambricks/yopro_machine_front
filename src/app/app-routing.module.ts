import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogDashboardComponent } from './log-dashboard/log-dashboard.component'; // Importe o novo componente
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';

const routes: Routes = [
  { path: 'log-dashboard', component: LogDashboardComponent },
  { path: '', component: CardDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
