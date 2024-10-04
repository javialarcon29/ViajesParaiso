import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen: boolean = false; // Propiedad para controlar el estado del menú

  // Método para alternar el estado del menú
  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Cambia el estado del menú
  }
}


