import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageContactenosPageRoutingModule } from './page-contactenos-routing.module';

import { PageContactenosPage } from './page-contactenos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageContactenosPageRoutingModule
  ],
  declarations: [PageContactenosPage]
})
export class PageContactenosPageModule {}
