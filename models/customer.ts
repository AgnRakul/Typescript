export interface BasicProduct {
  id: number;
}

export interface Product extends BasicProduct {
  name: String;
  description: String;
  instockQuantity: number;
  price: number;
}

export interface BasicCustomer {
  id: number;
}

export interface Customer extends BasicCustomer {
  name: string;
  email?: string;
  password?: string;
}
