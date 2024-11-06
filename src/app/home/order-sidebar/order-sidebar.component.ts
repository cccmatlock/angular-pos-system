import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { RegisterItem } from '../../common/types/item';
import { RegisterService } from '../../services/register-service/register-service.service';

@Component({
  selector: 'app-order-sidebar',
  standalone: true,
  imports: [
    TabViewModule,
    StyleClassModule,
    ButtonModule,
    TagModule,
    CommonModule,
  ],
  templateUrl: './order-sidebar.component.html',
  styleUrl: './order-sidebar.component.scss',
})
export class OrderSidebarComponent implements OnInit {
  items: RegisterItem[] = [];

  constructor(private registerService: RegisterService) {}

  ngOnInit() {
    // Subscribe to the items array to update the component whenever the array changes
    this.registerService.items$.subscribe((items) => {
      this.items = items;
    });
  }

  deleteItem(itemId: string) {
    this.registerService.deleteItem(itemId); // Delete the item by ID
  }

  clearItems() {
    this.registerService.clearItems(); // Clear all items
  }
}
