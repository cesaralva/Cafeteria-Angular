
import { Component } from '@angular/core';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LacartaComponent } from '../lacarta/lacarta.component';
import { HomeComponent } from '../home/home.component';
import { NuestroslacalesComponent } from '../nuestroslacales/nuestroslacales.component';
import { ReservasComponent } from '../reservas/reservas.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NosotrosComponent,RouterOutlet,RouterLink,LacartaComponent,HomeComponent,NuestroslacalesComponent,ReservasComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
