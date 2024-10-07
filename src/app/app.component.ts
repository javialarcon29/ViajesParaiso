import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturedCitiesComponent } from './featured-cities/featured-cities.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from "./contact/contact.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturedCitiesComponent,
    ServicesComponent,
    FichaTecnicaComponent,
    ContactComponent,
    FooterComponent,
    RouterModule,
    // Asegúrate de que ContactComponent esté aquí,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViajesParaiso';
}
