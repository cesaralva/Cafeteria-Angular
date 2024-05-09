import { NosotrosComponent } from './components/nosotros/nosotros.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,NosotrosComponent,NavbarComponent,HomeComponent]
})
export class AppComponent {
  title = 'Proyecto-Cafe';
}
