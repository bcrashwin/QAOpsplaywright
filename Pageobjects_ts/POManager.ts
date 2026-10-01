import{DashBoardPage}from './DashBoardPage';
import{LoginPage} from './LoginPage';
import{ OrdersHistoryPage } from './OrdersHistoryPage';
import{ OrdersReviewPage } from'./OrdersReviewPage';
import{ CartPage } from './CartPage';
import{Page} from '@playwright/test'



export class POManager 
{
    loginPage : LoginPage;
    dashboardPage:DashBoardPage;
    ordersHistoryPage:OrdersHistoryPage;
    ordersReviewPage:OrdersReviewPage;
    cartPage: CartPage;
    page:Page




    constructor(page:Page) 
    {
        this.page = page;

        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashBoardPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page);





    }
    getLoginPage() 
    {
        return this.loginPage;
    }
    getDashBoardPage() 
    {
        return this.dashboardPage;
    }
    getOrdersHistoryPage() 
    {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage() 
    {
        return this.ordersReviewPage;
    }
    getCartPage() 
    {
        return this.cartPage;
    }






}
module.exports = { POManager };