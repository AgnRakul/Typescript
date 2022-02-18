import { BasicProduct, Product } from "../models/customer";
import { BasicCustomer, Customer } from "../models/customer";

export interface BasicOrder {
  product: BasicProduct;
  customer: BasicCustomer;
  productQuantity: number;
}

export interface Order extends BasicOrder {
  orderId: number;
}

export interface OrderWithDetials extends Order {
  product: Product;
  customer: Customer;
}
