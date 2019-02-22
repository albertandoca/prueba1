import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MenuComponent } from './home/menu/menu.component';
import { FooterComponent } from './home/footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: 'menu', component: MenuComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'cuerpo', loadChildren: './home/cuerpo/cuerpo.module#CuerpoModule'},
    {path: 'slide', loadChildren: './home/slide/slide.module#SlideModule'}
  ]},
  {path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'galeria', loadChildren: './galeria/galeria.module#GaleriaModule'},
  {path: 'adm', loadChildren: './administrador/administrador.module#AdministradorModule'},
  {path: 'not-found', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
