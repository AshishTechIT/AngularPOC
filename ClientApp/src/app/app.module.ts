import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { ProductComponent } from './product/product.component';
import { CurrencyService } from './currency.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
 
    ProductComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductComponent, pathMatch: 'full' },
      { path: 'product', component: ProductComponent },
    ])
  ],
  providers:[CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
