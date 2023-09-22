import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Noticias2PageRoutingModule } from './noticias2-routing.module';

import { Noticias2Page } from './noticias2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Noticias2PageRoutingModule
  ],
  declarations: [Noticias2Page]
})
export class Noticias2PageModule {}
