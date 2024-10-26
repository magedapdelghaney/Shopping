import { Component, OnInit } from '@angular/core';
import { Order, OrdersService } from './orders.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-view',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{orderDetails?.OrderId}}
    </p>
  `,
  styles: ``
})
export class OrderViewComponent implements OnInit {
  orderDetails: Order | undefined;

  constructor(private orderSevice:OrdersService,private route: ActivatedRoute){}

  ngOnInit(): void {
      this.getOrderById();
  }

  getOrderById() {
    // could be implemented by input prop connection 
    let orderId = this.route.snapshot.paramMap.get('orderId');
    this.orderSevice.getOrders().subscribe((response) => {
      this.orderDetails = response.find(
        (order) => order.OrderId === Number(orderId)
      );    
    });
  }
}
