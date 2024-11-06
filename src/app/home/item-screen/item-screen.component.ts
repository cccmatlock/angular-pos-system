import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TabViewModule } from 'primeng/tabview';
import { Item, ItemCategory } from '../../common/types/item';
import { ImageModule } from 'primeng/image';
import {
  APPLE_IMG_PATH,
  APRICOTS_IMG_PATH,
  CHICKEN_BREAST_IMG_PATH,
  CHICKEN_THIGHS_IMG_PATH,
  DAIRY_IMG_PATH,
  GRAPES_IMG_PATH,
  GROUND_BEEF_IMG_PATH,
  HALF_AND_HALF_IMG_PATH,
  LAMB_CHOPS_IMG_PATH,
  MEATS_IMG_PATH,
  MILK_IMG_PATH,
  ORANGES_IMG_PATH,
  PORK_CHOPS_IMG_PATH,
  PRODUCE_IMG_PATH,
  YOGURT_IMG_PATH,
} from './item-constants';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RegisterService } from '../../services/register-service/register-service.service';

@Component({
  selector: 'app-item-screen',
  standalone: true,
  imports: [
    TabViewModule,
    BadgeModule,
    AvatarModule,
    ImageModule,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './item-screen.component.html',
  styleUrl: './item-screen.component.scss',
})
export class ItemScreenComponent implements OnInit {
  itemCategories: ItemCategory[] = [
    {
      id: '1',
      name: 'Produce',
      img: PRODUCE_IMG_PATH,
      items: [
        {
          id: '1',
          name: 'apples',
          img: APPLE_IMG_PATH,
        },
        {
          id: '2',
          name: 'grapes',
          img: GRAPES_IMG_PATH,
        },
        {
          id: '3',
          name: 'oranges',
          img: ORANGES_IMG_PATH,
        },
        {
          id: '4',
          name: 'apricots',
          img: APRICOTS_IMG_PATH,
        },
      ],
    },
    {
      id: '2',
      name: 'Meats',
      img: MEATS_IMG_PATH,
      items: [
        {
          id: '1',
          name: 'pork chops',
          img: PORK_CHOPS_IMG_PATH,
        },
        {
          id: '2',
          name: 'ground beef',
          img: GROUND_BEEF_IMG_PATH,
        },
        {
          id: '3',
          name: 'lamb chops',
          img: LAMB_CHOPS_IMG_PATH,
        },
        {
          id: '4',
          name: 'chicken breast',
          img: CHICKEN_BREAST_IMG_PATH,
        },
        {
          id: '5',
          name: 'chicken thighs',
          img: CHICKEN_THIGHS_IMG_PATH,
        },
      ],
    },
    {
      id: '3',
      name: 'Dairy',
      img: DAIRY_IMG_PATH,
      items: [
        {
          id: '1',
          name: 'milk',
          img: MILK_IMG_PATH,
        },
        {
          id: '2',
          name: 'half & half',
          img: HALF_AND_HALF_IMG_PATH,
        },
        {
          id: '3',
          name: 'yogurt',
          img: YOGURT_IMG_PATH,
        },
      ],
    },
  ];
  items: Item[] = [];

  constructor(private registerService: RegisterService) {}

  ngOnInit() {
    // Subscribe to the items array to update the component whenever the array changes
    this.registerService.items$.subscribe((items) => {
      this.items = items;
    });
  }

  // Call addItem method from RegisterService
  addItem(newItem: Item) {
    this.registerService.addItem(newItem); // Adds or updates item in the service
  }
}
