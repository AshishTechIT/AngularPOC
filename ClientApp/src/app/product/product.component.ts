
import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../product.model';
import { ExchangeRate } from '../exchange.model';
import { Country } from '../country.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
//implements OnInit 
export class ProductComponent implements OnInit{
  products: Product[] = [];
  exchangeRates: ExchangeRate[] = [];
  countries: Country[] = [];
  
  selectedCountry: string = 'USA'; // Default value
  selectedCountrySymbol: string = 'GBP'; // Default currency symbol


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
    this.loadExchangeRates();
    this.loadCountries();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => (this.products = products));
    
  }

  loadExchangeRates() {
    this.productService.getExchangeRates().subscribe(exchangeRates => (this.exchangeRates = exchangeRates));
  }

  loadCountries() {
    this.productService.getCountries().subscribe(countries => (this.countries = countries));
  }



  getExchangeRateForCurrency(currency: string): number {
    const exchangeRate = this.exchangeRates.find(rate => rate.currencyCode === currency);
    return exchangeRate ? exchangeRate.rate : 1;
  }

 
  getExchangeRateForProduct(product: Product): number {
    const currentDate = new Date();
    const exchangeRate = this.exchangeRates.find(rate => rate.currencyCode === product.currency &&
      new Date(rate.validFromDate) <= currentDate &&
      (rate.validToDate === null || new Date(rate.validToDate) >= currentDate));
    return exchangeRate ? exchangeRate.rate : 1;
  }
  onCountrySelection(product: Product, selectedCountryCode: string): void {
    const selectedCountry = this.countries.find(country => country.countryCode === selectedCountryCode);
    if (selectedCountry) {
      const exchangeRate = this.exchangeRates.find(rate => rate.currencyCode === selectedCountry.currencyCode);
      if (exchangeRate) {
        this.selectedCountrySymbol = this.getCountrySymbol(selectedCountry.countryCode);
        const newPrice = (product.price / this.getExchangeRateForProduct(product)) * exchangeRate.rate;
        // Update the product's price
        product.price = newPrice;
      }
    }
  }

  getCountrySymbol(countryCode: string): string {
    const selectedCountry = this.countries.find((country) => country.countryCode === countryCode);
    return selectedCountry ? selectedCountry.currencyCode : '';
  }
  
}
