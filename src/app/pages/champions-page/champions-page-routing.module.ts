import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsPageComponent } from '@app/pages/champions-page/champions-page.component';

const routes: Routes = [
  { path: '', component: ChampionsPageComponent },
  { path: ':year', component: ChampionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionsPageRoutingModule { }
