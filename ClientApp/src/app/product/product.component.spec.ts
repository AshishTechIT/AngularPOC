import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { of } from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productServiceMock: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    // Create a spy object for ProductService
    productServiceMock = jasmine.createSpyObj('ProductService', ['getProducts', 'getExchangeRates', 'getCountries']);

    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [{ provide: ProductService, useValue: productServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products, exchange rates, and countries on initialization', () => {
    // Mock the responses of ProductService methods
    productServiceMock.getProducts.and.returnValue(of([]));
    productServiceMock.getExchangeRates.and.returnValue(of([]));
    productServiceMock.getCountries.and.returnValue(of([]));

    fixture.detectChanges(); // Trigger ngOnInit

    expect(productServiceMock.getProducts).toHaveBeenCalled();
    expect(productServiceMock.getExchangeRates).toHaveBeenCalled();
    expect(productServiceMock.getCountries).toHaveBeenCalled();
  });

  

  // Add more tests based on your component functionality

});
