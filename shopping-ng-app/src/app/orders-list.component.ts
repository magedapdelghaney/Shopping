import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order, OrdersService } from './orders.service';
import { OrderCardComponent } from './order-card.component';


@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CommonModule,OrderCardComponent],
  template: `
    <section>
      <h2> Orders</h2>
    </section>
    <div id="carsContainer" class="cards-container">
      <app-order-card *ngFor="let order of orders" [order]="order">
      </app-order-card>
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
}`
})
export class OrdersListComponent implements OnInit {
  orders:Order[]=[] 

constructor(private orderService:OrdersService){}


 ngOnInit(): void {

  this.getAllOrders();
  
 }

  getAllOrders() {
    this.orderService.getOrders().subscribe((response)=>{
      this.orders=response;
    })};
  

}
