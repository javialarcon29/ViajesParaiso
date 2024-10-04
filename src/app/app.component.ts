import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; // Asegúrate de que esta ruta sea correcta
import { HeroComponent } from './hero/hero.component';
import { FeaturedCitiesComponent } from './featured-cities/featured-cities.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component'; // Importar el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, 
    HeroComponent,
    FeaturedCitiesComponent,
    ServicesComponent,
    FichaTecnicaComponent, // Añadir el componente aquí
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViajesParaiso';
}
