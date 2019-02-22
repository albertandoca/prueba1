import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuerpoRoutingModule } from './cuerpo-routing.module';
import { MenuComponent } from 'src/app/administrador/menu/menu.component';
import { CuerpoComponent } from './cuerpo.component';

@NgModule({
  declarations: [CuerpoComponent],
  imports: [
    CommonModule,
    CuerpoRoutingModule
  ]
})
export class CuerpoModule { }
