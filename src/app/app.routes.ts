// app.routes.ts
import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FeaturedCitiesComponent } from './featured-cities/featured-cities.component';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  { path: 'hero', component: HeroComponent },
  { path: 'featured-cities', component: FeaturedCitiesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  // Ruta con parámetro dinámico 'name' para las fichas técnicas
  { path: 'city/:name', component: FichaTecnicaComponent },
  { path: '', redirectTo: '/hero', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/hero' } // Ruta comodín para 404
];
