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

  // Información ficticia de ciudades para ilustrar el ejemplo
  citiesData = [
    {
      name: 'Río de Janeiro',
      description: 'Descripción de Río de Janeiro',
      attractions: ['Cristo Redentor', 'Playas de Copacabana', 'Pan de Azúcar'],
      bestTimeToVisit: 'De diciembre a marzo',
    },
    {
      name: 'São Paulo',
      description: 'Descripción de São Paulo',
      attractions: ['Avenida Paulista', 'Parque Ibirapuera', 'Museo de Arte de São Paulo'],
      bestTimeToVisit: 'De marzo a mayo y de septiembre a noviembre',
    },
    // Agrega más ciudades según sea necesario
  ];

  constructor(private route: ActivatedRoute) {
    // Obtener el nombre de la ciudad del parámetro de la ruta
    this.route.paramMap.subscribe(params => {
      this.cityName = params.get('name');
      this.getCityInfo(this.cityName);
    });
  }

  getCityInfo(name: string | null) {
    if (name) {
      // Buscar la ciudad en la lista de datos
      this.cityInfo = this.citiesData.find(city => city.name.toLowerCase() === name.toLowerCase());
    }
  }
}
