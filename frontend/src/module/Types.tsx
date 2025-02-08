enum Status {
  Failed = 0,
  Active,
  Denied,
}

export interface QuickRes {
  id: number;
  name: string;
  desc: string;
  status: Status;
}

export interface QrListProps {
  title: string;
  data: QuickRes[];
}

export interface OrderProps {
  qrname: string;
  owner: string;
  data: Order[];
}

export type Option = {
  label: string;
  value: string;
  text: string;
};

export interface Category {
  _id: string;
  name: string;
  image?: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  _id: string;
  name: string;
  description?: string;
  items?: Item[];
}

export interface Item {
  _id: string;
  name: string;
  description?: string;
  image?: File;
  prices: { size: string; price: number }[];
}

export interface Order {
  _id: string;
  status: string;
  items: Item[];
}
