import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Noticias0Page } from './noticias0.page';

const routes: Routes = [
  {
    path: '',
    component: Noticias0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Noticias0PageRoutingModule {}
