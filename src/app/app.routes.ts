import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{path: 'nosotros', component: NosotrosComponent},{path: 'home', component: HomeComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
