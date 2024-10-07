// app.routes.ts
import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FeaturedCitiesComponent } from './featured-cities/featured-cities.component';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Esto mostrará HeroComponent en la ruta raíz
  { path: 'featured-cities', component: FeaturedCitiesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'city/:name', component: FichaTecnicaComponent },
  { path: '**', redirectTo: '' } // Redirige a la ruta raíz
];
