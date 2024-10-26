import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, ProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{productDetails.ProductName}}
    </p>
  `,
  styles: ``,
})
export class ProductViewComponent implements OnInit {
  product$!: Observable<Product | any>;
  productDetails!: any;

  constructor(
    private producService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    // could be implemented by input prop connection 
    let productId = this.route.snapshot.paramMap.get('productId');
    this.producService.getProducts().subscribe((response) => {
      this.productDetails = response.find(
        (product) => product.ProductId === Number(productId)
      );    
    });


  }
}
