import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageContactenosPage } from './page-contactenos.page';

const routes: Routes = [
  {
    path: '',
    component: PageContactenosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageContactenosPageRoutingModule {}
