const { DashBoardPage } = require('./DashBoardPage');
const { LoginPage } = require('./LoginPage');
const { OrdersHistoryPage } = require('./OrdersHistoryPage');
const { OrdersReviewPage } = require('./OrdersReviewPage');
const { CartPage } = require('./CartPage');



class POManager {

    constructor(page) {
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