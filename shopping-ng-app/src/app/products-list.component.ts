import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section>
      <h2> Products</h2>
    </section>
    <div id="carsContainer" class="cards-container">
      <app-product-card *ngFor="let product of products" [product]="product">
      </app-product-card>
    </div>
  `,
  styles: `.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
}

body {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}`,
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  constructor(readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
}
