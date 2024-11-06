// src/app/core/services/register-service/register.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item, RegisterItem } from '../../common/types/item';
import { v4 as uuidv4 } from 'uuid'; // Import UUID function

@Injectable({
  providedIn: 'root', // This makes the service available app-wide
})
export class RegisterService {
  private itemsSubject = new BehaviorSubject<RegisterItem[]>([]); // Holds the current state of the items array
  items$ = this.itemsSubject.asObservable(); // Observable to subscribe to the items array

  constructor() {}

  addItem(newItem: Item) {
    const currentItems = this.itemsSubject.value;

    // Check if the item already exists in the array by comparing the name
    const existingItemIndex = currentItems.findIndex(
      (item) => item.name === newItem.name,
    );

    if (existingItemIndex !== -1) {
      // Item exists, update its quantity
      const updatedItem = {
        ...currentItems[existingItemIndex],
        qty: currentItems[existingItemIndex].qty + 1, // Increment qty by 1
      };

      // Replace the old item with the updated item
      currentItems[existingItemIndex] = updatedItem;
    } else {
      // Item doesn't exist, add it with qty = 1
      const newItemWithQty = { ...newItem, qty: 1 };
      currentItems.push(newItemWithQty);
    }

    // Update the items subject with the modified items array
    this.itemsSubject.next([...currentItems]);
  }

  // Method to delete an item by its ID
  deleteItem(itemId: string) {
    const updatedItems = this.itemsSubject.value.filter(
      (item) => item.id !== itemId,
    );
    this.itemsSubject.next(updatedItems); // Remove the item with the matching ID
  }

  // Method to clear all items
  clearItems() {
    this.itemsSubject.next([]); // Clear the entire items array
  }
}
