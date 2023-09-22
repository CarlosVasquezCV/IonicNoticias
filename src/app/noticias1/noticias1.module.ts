import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Noticias1PageRoutingModule } from './noticias1-routing.module';

import { Noticias1Page } from './noticias1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Noticias1PageRoutingModule
  ],
  declarations: [Noticias1Page]
})
export class Noticias1PageModule {}
