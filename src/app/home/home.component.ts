import { Component } from '@angular/core';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { OrderSidebarComponent } from './order-sidebar/order-sidebar.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { ItemScreenComponent } from './item-screen/item-screen.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    OrderSidebarComponent,
    MenuSidebarComponent,
    ItemScreenComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
