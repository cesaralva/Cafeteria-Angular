import { NosotrosComponent } from './components/nosotros/nosotros.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LacartaComponent } from './components/lacarta/lacarta.component';
import { ReservasComponent } from './components/reservas/reservas.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,NosotrosComponent,NavbarComponent,HomeComponent,NosotrosComponent,RouterOutlet,RouterLink,LacartaComponent,HomeComponent,ReservasComponent]
})
export class AppComponent {
  title = 'Proyecto-Cafe';
}
