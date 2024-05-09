import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LacartaComponent } from '../lacarta/lacarta.component';
import 'animate.css';
@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet,RouterLink,LacartaComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
