import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresComponent } from './lugares/lugares.component';
import { SitiosComponent } from './sitios/sitios.component';




export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactoComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: '**',component: NoEncontradoComponent}
];

export const environment = {
    production: true,
    logoUrl: 'assets/logo.png'
  };