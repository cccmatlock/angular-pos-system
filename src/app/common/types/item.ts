export interface Item {
  id: string;
  name: string;
  img: string;
}

export interface RegisterItem extends Item {
  qty: number;
}

export interface ItemCategory {
  id: string;
  name: string;
  img: string;
  items: Item[];
}
