import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule para usar [(ngModel)]
import { CommonModule } from '@angular/common';  // Importa CommonModule para usar ngClass

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, CommonModule]  // Asegúrate de importar FormsModule y CommonModule aquí
})
export class ContactComponent {
  messages: { user: string, text: string }[] = [];
  userMessage: string = '';

  // Lista de preguntas comunes con respuestas
  faq: { [key: string]: string } = {
    'Hola': 'Buenas, ¿en qué podemos ayudarle?',
    'Buenos dias': 'Buenas, ¿en qué podemos ayudarle?',
    'Buenas tardes': 'Buenas, ¿en qué podemos ayudarle?',
    'Buenas noches': 'Buenas, ¿en qué podemos ayudarle?',
    'Buenas': 'Buenas, ¿en qué podemos ayudarle?',
    'destinos': 'Ofrecemos paquetes a destinos a las ciudades de Brasil. ¿Te gustaría más información sobre algún destino específico?',
    'horario': 'Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00. Sábados de 10:00 a 14:00.',
    'precio': 'Los precios varían según el destino y la temporada. ¿Te gustaría una cotización para algún lugar en particular?',
    'promociones': 'Actualmente tenemos promociones para viajes a 9 ciudades de Brasil que tenemos en la sección de ciudades. ¡Contáctanos para más detalles!',
    'contacto': 'Puedes contactarnos por teléfono al +34 685 905 896 o por correo electrónico a javialarcon29@gmail.com.',
    'formas de pago': 'Aceptamos pagos con tarjeta de crédito, débito y transferencia bancaria. Para pagos en efectivo, debe contactar con nosotros directamente.',
    'requisitos de viaje': 'Dependerá del destino, pero en general necesitarás tu pasaporte vigente y visado en ciertos países. Contáctanos para más detalles.'
  };

  // Preguntas comunes para mostrar como botones
  commonQuestions: string[] = ['destinos', 'horario', 'precio', 'promociones', 'contacto', 'formas de pago', 'requisitos de viaje'];

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ user: 'User', text: this.userMessage });
      this.botReply(this.userMessage);
      this.userMessage = '';
    }
  }

  // Método para manejar el clic en una pregunta frecuente
  sendCommonQuestion(question: string) {
    this.userMessage = question;
    this.sendMessage();
  }

  botReply(userMessage: string) {
    const messageLowerCase = userMessage.toLowerCase();
    let botResponse = 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla o hacer otra consulta?, para cualquier otra duda no dude en contactarnos por email o whatsapp';

    // Responder según las palabras clave encontradas en el mensaje del usuario
    if (this.containsKeyword(messageLowerCase, ['destinos', 'lugar', 'viajar', 'ciudades', 'países'])) {
      botResponse = this.faq['destinos'];
    } else if (this.containsKeyword(messageLowerCase, ['horario', 'hora', 'tiempo', 'disponibilidad', 'atención','apertura','cierre','abre','cierra'])) {
      botResponse = this.faq['horario'];
    } else if (this.containsKeyword(messageLowerCase, ['precio', 'costos', 'tarifas', 'cuánto', 'valor'])) {
      botResponse = this.faq['precio'];
    } else if (this.containsKeyword(messageLowerCase, ['promociones', 'descuento', 'ofertas', 'rebajas'])) {
      botResponse = this.faq['promociones'];
    } else if (this.containsKeyword(messageLowerCase, ['contacto', 'hablar', 'comunicarse', 'llamar', 'email', 'correo'])) {
      botResponse = this.faq['contacto'];
    } else if (this.containsKeyword(messageLowerCase, ['formas de pago', 'pago', 'pagos', 'métodos de pago', 'opciones de pago'])) {
      botResponse = this.faq['formas de pago'];
    } else if (this.containsKeyword(messageLowerCase, ['requisitos', 'visa', 'documentos', 'papeles', 'pasaporte','viaje'])) {
      botResponse = this.faq['requisitos de viaje'];
    }

    this.messages.push({ user: 'Bot', text: botResponse });
  }

  // Función auxiliar para buscar si el mensaje contiene alguna palabra clave
  containsKeyword(message: string, keywords: string[]): boolean {
    return keywords.some(keyword => message.includes(keyword));
  }
}
