import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

export const routes: Routes = [{path: 'nosotros', component: NosotrosComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
