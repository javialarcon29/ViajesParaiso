import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:3000';  // URL de tu backend Node.js

  constructor(private http: HttpClient) { }

  // Método para crear la orden de pago
  createOrder(): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-order`, {});
  }
}

