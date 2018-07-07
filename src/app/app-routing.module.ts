import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule'},
  { path: 'champions', loadChildren: './pages/champions-page/champions-page.module#ChampionsPageModule'},
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
