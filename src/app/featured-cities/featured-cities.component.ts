import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa esto si necesitas directivas comunes

interface City {
  name: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-featured-cities',
  standalone: true, // Marcar el componente como standalone
  imports: [CommonModule], // Importar cualquier otro módulo necesario
  templateUrl: './featured-cities.component.html',
  styleUrls: ['./featured-cities.component.css']
})
export class FeaturedCitiesComponent {
  cities: City[] = [
    {
      name: 'Río de Janeiro',
      description: 'Descubre las playas de Copacabana y el Cristo Redentor',
      image: 'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 1800
    },
    {
      name: 'São Paulo',
      description: 'Explora la vibrante vida urbana de São Paulo',
      image: 'https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 1850
    },
    {
      name: 'Salvador de Bahía',
      description: 'Vive la cultura afrobrasileña de Salvador',
      image: 'https://images.pexels.com/photos/20533298/pexels-photo-20533298/free-photo-of-mar-puesta-de-sol-vacaciones-bahia.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 1950
    },
    {
      name: 'Recife',
      description: 'Conoce la belleza colonial de Recife',
      image: 'https://images.pexels.com/photos/26770689/pexels-photo-26770689/free-photo-of-mar-ciudad-rascacielos-viaje.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 2250
    },
    {
      name: 'Fortaleza',
      description: 'Disfruta de las playas de Fortaleza',
      image: 'https://images.pexels.com/photos/18056778/pexels-photo-18056778/free-photo-of-iglesia-catedral-catolico-cristianismo.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 2100
    },
    {
      name: 'Manaos',
      description: 'Explora el Amazonas desde Manaos',
      image: 'https://media.istockphoto.com/id/656700836/es/foto/vista-de-manaus-con-teatro-amazonas.jpg?b=1&s=612x612&w=0&k=20&c=yyLC9STzq5RmloahckmSmhEGqDpGbDZ419wqVTMieYU=',
      price: 2300
    },
    {
      name: 'Natal',
      description: 'Explora el Amazonas desde Manaos',
      image: 'https://media.istockphoto.com/id/531165945/es/foto/ponta-negra-dunes-beach-en-la-ciudad-de-natal-brasil.jpg?b=1&s=612x612&w=0&k=20&c=QFoPcOHi-m-oOK4fJGSzMTn1RaEnYB7DIB37lPseN7g=',
      price: 2200
    },
    {
      name: 'Ilha Grande',
      description: 'Explora el Amazonas desde Manaos',
      image: 'https://media.istockphoto.com/id/660726016/es/foto/ilhabela-sao-paulo-brasil.jpg?b=1&s=612x612&w=0&k=20&c=cykPeGMFobIAmXSG6T5U5jxNuMKx66dGHg7BZ08ns9A=',
      price: 2400
    },
    {
      name: 'Florianópolis',
      description: 'Relájate en las playas de Florianópolis',
      image: 'https://media.istockphoto.com/id/1320979580/es/foto/playa-brasil-agua-azul-pantano-do-sul-florian%C3%B3polis-praia-verano.jpg?b=1&s=612x612&w=0&k=20&c=-Ble6fCMh_d3DFqCub10Mps4kuGJ0xluMzxGROYsBJY=',
      price: 2050
    }
  ];
}
