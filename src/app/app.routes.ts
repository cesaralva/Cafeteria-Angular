import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { LacartaComponent } from './components/lacarta/lacarta.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { NuestroslacalesComponent } from './components/nuestroslacales/nuestroslacales.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'lacarta', component: LacartaComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'locales', component: NuestroslacalesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
