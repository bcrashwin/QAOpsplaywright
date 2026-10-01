import { expect, type Locator, type Page } from '@playwright/test';
let message1 : string  = "hello"
message1 = "bye";
console.log(message1);
let age1:number = 20;
console.log(age1);
let isActive : boolean = false;

let numberArry : number[] = [1,2,3];

let data : any = "this could be anything";
data = 42;
function add(a:number,b:number):number
{
  return a+b
}
add(3,4);
let user : {name: string, age : number, location : string}={name: "Bob", age : 34, location : "delhi"};
user.location= "hyderabad";

class CartPage
{
    page:Page;
    cartProducts:Locator;
constructor(page:any)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}
