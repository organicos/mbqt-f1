import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule'},
  { path: 'seasons', loadChildren: './pages/seasons/seasons.module#SeasonsModule'},
  { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    /*
     * PreloadAllModules
     *
     * Makes rounting faster.
     * Deserves more bandwith analysis in large apps
     */
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
