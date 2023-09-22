import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'page-perfil',
    loadChildren: () => import('./page-perfil/page-perfil.module').then( m => m.PagePerfilPageModule)
  },
  {
    path: 'page-contactenos',
    loadChildren: () => import('./page-contactenos/page-contactenos.module').then( m => m.PageContactenosPageModule)
  },
  {
    path: 'noticias0',
    loadChildren: () => import('./noticias0/noticias0.module').then( m => m.Noticias0PageModule)
  },
  {
    path: 'noticias1',
    loadChildren: () => import('./noticias1/noticias1.module').then( m => m.Noticias1PageModule)
  },
  {
    path: 'noticias2',
    loadChildren: () => import('./noticias2/noticias2.module').then( m => m.Noticias2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
