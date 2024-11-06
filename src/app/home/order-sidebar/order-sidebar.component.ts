import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-order-sidebar',
  standalone: true,
  imports: [TabViewModule, StyleClassModule],
  templateUrl: './order-sidebar.component.html',
  styleUrl: './order-sidebar.component.scss',
})
export class OrderSidebarComponent {}
