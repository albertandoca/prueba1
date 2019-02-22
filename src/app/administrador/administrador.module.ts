import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { MenuComponent } from './menu/menu.component';
import { OpcionesComponent } from './opciones/opciones.component';

@NgModule({
  declarations: [AdministradorComponent, MenuComponent, OpcionesComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
