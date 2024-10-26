import { Component, Input, input } from '@angular/core';
import { Product } from './products.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <div class="corner"></div>
      <img
        src="{{product.ProductImg}}"
        class="thumb"
      />
      <div class="content">
      <h2 class="title">{{ product.ProductName }}</h2>
        <div class="meta">
          <span>Price</span>
          <span>{{ product.ProductPrice }}</span>
        </div>
        <div class="meta">
          <span>Avilable pieces</span>
          <span>{{ product.AvailablePieces }}</span>
        </div>
        <p class="summry">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          egestas sapien...
        </p>
        <a href="/productDetails/{{ product.ProductId }}" class="readMore">
          click for details
        </a>
      </div>
    </div>
  `,
  styles: `

.card {
    width: 320px;
    background-color: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
}
.card:hover {
    box-shadow: 0 8px 25px rgba(88, 0, 0, 0.2);
}
.thumb {
    width: 100%;
    height: 180px;
    object-fit: cover;
}
.content {
    padding: 20px;
    position: relative;
}
.meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #888;
    margin-bottom: 10px;
}
.title {
    color: #580000;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    line-height: 1.4;
}
.summry {
    color: #333;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
}
.readMore {
    color: #580000;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: all 0.3s ease;
}
.readMore:hover {
    color: #7a0000;
}
.readMore::after {
    content: '→';
    margin-left: 5px;
    transition: all 0.3s ease;
}
.readMore:hover::after {
    transform: translateX(5px);
}
.corner {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 100px;
    height: 100px;
    background-color: #580000;
    transform: rotate(45deg);
}
.corner::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%) rotate(45deg);
}
.card::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #580000;
}
`,
})
export class ProductCardComponent {
  @Input() product!: Product;
}
