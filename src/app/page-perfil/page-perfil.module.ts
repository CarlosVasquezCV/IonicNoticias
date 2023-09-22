import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePerfilPageRoutingModule } from './page-perfil-routing.module';

import { PagePerfilPage } from './page-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePerfilPageRoutingModule
  ],
  declarations: [PagePerfilPage]
})
export class PagePerfilPageModule {}
