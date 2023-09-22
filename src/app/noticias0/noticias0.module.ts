import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Noticias0PageRoutingModule } from './noticias0-routing.module';

import { Noticias0Page } from './noticias0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Noticias0PageRoutingModule
  ],
  declarations: [Noticias0Page]
})
export class Noticias0PageModule {}
