import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { MenuComponent } from 'src/app/administrador/menu/menu.component';
import { OpcionesComponent } from './opciones/opciones.component';

const routes: Routes = [
  {path: '', component: AdministradorComponent, children: [
    {path: 'menu', component: MenuComponent},
    {path: 'opciones', component: OpcionesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
