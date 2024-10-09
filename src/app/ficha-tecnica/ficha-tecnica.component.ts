import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute para acceder a los parámetros de la ruta

@Component({
  selector: 'app-ficha-tecnica',
  standalone: true,
  imports: [CommonModule], // Importar cualquier módulo necesario
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.css']
})
export class FichaTecnicaComponent {
  cityName: string | null = null; // Variable para almacenar el nombre de la ciudad
  cityInfo: any; // Aquí puedes definir el tipo adecuado para cityInfo

  // Información de las ciudades con precios, imágenes y atracciones
  citiesData = [
    {
      name: 'Río de Janeiro',
      description: 'Descubre las playas de Copacabana y el Cristo Redentor',
      attractions: ['Cristo Redentor', 'Playas de Copacabana', 'Pan de Azúcar'],
      bestTimeToVisit: 'De diciembre a marzo',
      price: 1800,
      images: [
        'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/654123/pexels-photo-654123.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/654124/pexels-photo-654124.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      name: 'São Paulo',
      description: 'Explora la vibrante vida urbana de São Paulo',
      attractions: ['Avenida Paulista', 'Parque Ibirapuera', 'Museo de Arte de São Paulo'],
      bestTimeToVisit: 'De marzo a mayo y de septiembre a noviembre',
      price: 1850,
      images: [
        'https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/321234/pexels-photo-321234.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/123432/pexels-photo-123432.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/543234/pexels-photo-543234.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      name: 'Salvador de Bahía',
      description: 'Vive la cultura afrobrasileña de Salvador',
      attractions: ['Pelourinho', 'Elevador Lacerda', 'Iglesia de Bonfim'],
      bestTimeToVisit: 'De diciembre a febrero',
      price: 1950,
      images: [
        'https://images.pexels.com/photos/20533298/pexels-photo-20533298/free-photo-of-mar-puesta-de-sol-vacaciones-bahia.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/543098/pexels-photo-543098.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      name: 'Recife',
      description: 'Conoce la belleza colonial de Recife',
      attractions: ['Playa Boa Viagem', 'Casa de Cultura', 'Recife Antiguo'],
      bestTimeToVisit: 'De septiembre a marzo',
      price: 2250,
      images: [
        'https://images.pexels.com/photos/26770689/pexels-photo-26770689/free-photo-of-mar-ciudad-rascacielos-viaje.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/654432/pexels-photo-654432.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      name: 'Fortaleza',
      description: 'Disfruta de las hermosas playas y la vida nocturna de Fortaleza',
      attractions: ['Playa de Cumbuco', 'Pico da Ibiapaba', 'Mercado Central'],
      bestTimeToVisit: 'De diciembre a junio',
      price: 2000,
      images: [
        'https://images.pexels.com/photos/12345678/pexels-photo-12345678.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/87654321/pexels-photo-87654321.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/98765432/pexels-photo-98765432.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/23456789/pexels-photo-23456789.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      name: 'Manaos',
      description: 'Explora la selva amazónica desde Manaos',
      attractions: ['Teatro Amazonas', 'Encuentro de las Aguas', 'Museo del Hombre del Amazonas'],
      bestTimeToVisit: 'De junio a octubre',
      price: 2100,
      images: [
        'https://images.pexels.com/photos/34567890/pexels-photo-34567890.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/12349876/pexels-photo-12349876.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/23456790/pexels-photo-23456790.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/34567891/pexels-photo-34567891.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      name: 'Natal',
      description: 'Conoce las dunas y playas de Natal',
      attractions: ['Duna de Genipabu', 'Forte dos Reis Magos', 'Playas de Ponta Negra'],
      bestTimeToVisit: 'De diciembre a marzo',
      price: 1800,
      images: [
        'https://images.pexels.com/photos/45678901/pexels-photo-45678901.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/56789012/pexels-photo-56789012.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/67890123/pexels-photo-67890123.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/78901234/pexels-photo-78901234.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      name: 'Ilha Grande',
      description: 'Descubre la belleza natural de Ilha Grande',
      attractions: ['Playa Lopes Mendes', 'Caminho do Abel', 'Laguna Azul'],
      bestTimeToVisit: 'De noviembre a marzo',
      price: 2200,
      images: [
        'https://images.pexels.com/photos/89012345/pexels-photo-89012345.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/90123456/pexels-photo-90123456.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/12345678/pexels-photo-12345678.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/98765432/pexels-photo-98765432.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    },
    {
      name: 'Florianópolis',
      description: 'Explora las playas y el encanto de Florianópolis',
      attractions: ['Playa Joaquina', 'Lagoa da Conceição', 'Puente Hercílio Luz'],
      bestTimeToVisit: 'De diciembre a febrero',
      price: 2000,
      images: [
        'https://images.pexels.com/photos/23456789/pexels-photo-23456789.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/34567890/pexels-photo-34567890.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      attractionImages: [
        'https://images.pexels.com/photos/45678901/pexels-photo-45678901.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/56789012/pexels-photo-56789012.jpeg?auto=compress&cs=tinysrgb&w=600'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.cityName = this.route.snapshot.paramMap.get('name');
    this.cityInfo = this.citiesData.find(city => city.name.toLowerCase() === this.cityName?.toLowerCase()) || null;
  }
  redirectToPayment() {
    // URL de prueba de la pasarela de pago para desarrolladores (usa una URL válida)
    const paymentUrl = 'https://www.sandbox.paypal.com/checkoutnow?token=VALID_TOKEN'; // Reemplaza VALID_TOKEN por el token correcto
  
    // Redirige al usuario a la página de pago
    window.location.href = paymentUrl;
  }
}  