//services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  gallery: string[]; // Nueva propiedad para almacenar la galería de imágenes
  hovered: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [CommonModule]
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Transporte',
      description: 'Ofrecemos transporte cómodo y seguro en todo Brasil.',
      longDescription: 'Nuestro servicio de transporte incluye servicio de ida y vuelta a sitio de origen en vuelo comercial ideal para los vuelos largos en cualquier región de Brasil.',
      icon: 'fas fa-bus',
      image: 'assets/transport.jpg',
      gallery: ['https://images.pexels.com/photos/28787084/pexels-photo-28787084.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600'], // Galería de ejemplo
      hovered: false
    },
    {
      title: 'Alojamiento',
      description: 'Encuentra los mejores hoteles y posadas adaptadas a tu presupuesto.',
      longDescription: 'Te ayudamos a encontrar alojamiento en los mejores hoteles y posadas de Brasil, garantizando calidad, confort y precios adaptados a tu presupuesto.',
      icon: 'fas fa-hotel',
      image: 'assets/alojamiento.jpg',
      gallery: ['https://images.pexels.com/photos/7700005/pexels-photo-7700005.jpeg?auto=compress&cs=tinysrgb&w=600', 
        'https://images.pexels.com/photos/6419969/pexels-photo-6419969.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/482061909.jpg?k=22ae2e5ceb45c79e220833a2214e32d04a1df85ef11c83791585a4c47e25841c&o=&hp=1', 
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/537549432.jpg?k=c22c557795b0010c2599596b64e5475229cf5ffb206f77d4b494fa0e7cae7c1a&o=&hp=1', 
        'https://cf2.bstatic.com/xdata/images/hotel/square240/598993273.webp?k=aae12fea989c60375b0b0e78ebfc8cb45115788e668dc276e971e9dc539adb14&o=', 
        'https://cf2.bstatic.com/xdata/images/hotel/square240/559295616.webp?k=69f9f00b5c31135633c7bcfa5394a072de16ef6e2e206be8813ee1b3eccb5bf2&o=',
        'https://cf2.bstatic.com/xdata/images/hotel/square240/185684244.webp?k=71accc41996d5ab84730fc878d6b75029b4d069ab5cc3c524543282215665420&o=',  
        'https://cf2.bstatic.com/xdata/images/hotel/square240/515898330.webp?k=5ac4cf3658b98ca8ce68aaf9f8e4b17ca1e0e7f2a5b2c93e1cdeeed438c07c2e&o=',    
        'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/489555588.jpg?k=55e89f0403dd77d3a8ea8918704566d712c153672c09026149c631f7849c89bc&o=&hp=1'], // Galería de ejemplo
      hovered: false
    },
    {
      title: 'Guías Turísticos',
      description: 'Conoce los destinos con nuestros guías turísticos expertos.',
      longDescription: 'Nuestros guías turísticos certificados te llevarán a los lugares más impresionantes de Brasil, brindándote una experiencia inmersiva llena de historia y cultura.',
      icon: 'fas fa-map-marked-alt',
      image: 'assets/guias.jpg',
      gallery: ['https://images.pexels.com/photos/8044085/pexels-photo-8044085.jpeg?auto=compress&cs=tinysrgb&w=600', 
        'https://images.pexels.com/photos/25642903/pexels-photo-25642903/free-photo-of-aqui-te-estamos-mirando.jpeg?auto=compress&cs=tinysrgb&w=600', 
        'https://images.pexels.com/photos/28365665/pexels-photo-28365665/free-photo-of-modelo-masculino.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/20867428/pexels-photo-20867428/free-photo-of-moda-hombre-oscuro-cara.jpeg?auto=compress&cs=tinysrgb&w=600', 
        'https://images.pexels.com/photos/20620210/pexels-photo-20620210/free-photo-of-hombre-arena-desierto-sombrero.jpeg?auto=compress&cs=tinysrgb&w=600'], // Galería de ejemplo
      hovered: false
    }
  ];

  selectedService: Service | null = null;
  currentImageIndex: number = 0;

  toggleHover(service: Service): void {
    service.hovered = !service.hovered;
  }

  showMoreInfo(service: Service): void {
    this.selectedService = service;
    this.currentImageIndex = 0; // Restablecer el índice de la galería
  }

  closeModal(): void {
    this.selectedService = null;
  }

  nextImage(): void {
    if (this.selectedService) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedService.gallery.length;
    }
  }

  prevImage(): void {
    if (this.selectedService) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedService.gallery.length) % this.selectedService.gallery.length;
    }
  }
}
