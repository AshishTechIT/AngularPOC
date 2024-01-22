import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ExchangeRate } from '../exchange.model';
import { Country } from '../country.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:44431'; 
  
  private conversionRates = {
    GBP: 1,
    USD: 1.24,   
    EUR: 1.14,  
    AUD: 1.92
  };
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getExchangeRates(): Observable<ExchangeRate[]> {
    return this.http.get<ExchangeRate[]>(`${this.apiUrl}/exchangerate`);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/country`);
  }

  convertPrice(productId: number, newCurrency: string, exchangeRate: number): Observable<Product> {

    const convertUrl = `${this.apiUrl}/products/convertPrice/${productId}?newCurrency=${newCurrency}/exchangeRate=${exchangeRate}`;
    return this.http.put<Product>(convertUrl, {});
  }

}