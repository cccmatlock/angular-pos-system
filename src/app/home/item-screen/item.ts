export interface Item {
  id: string;
  name: string;
  img: string;
}

export interface ItemCategory {
  id: string;
  name: string;
  img: string;
  items: Item[];
}
