import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { OrdersListComponent } from './orders-list.component';

export const routes: Routes = [
    {path:'', pathMatch:'full',redirectTo:'products'},
    {path:'products', component:ProductsListComponent},
    {path:'orders', component:OrdersListComponent},
    {path:'productDetails/:productId', loadComponent:()=> import('./product-view.component').
    then(m => m.ProductViewComponent) },
    {path:'orderDetails/:orderId', loadComponent:()=> import('./order-view.component').
    then(m => m.OrderViewComponent) }
];
