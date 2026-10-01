const base = require('@playwright/test')
const {test, expect,request}=require('@playwright/test');



const {APiUtils}= require('./APiUtils.js')
const loginPayload={userEmail:"bcrashwin@gmail.com",userPassword:"Rash@123"}
const orderPayload={orders:[{country:"India",productOrderedId:"6960eac0c941646b7a8b3e68"}]}



exports.customtest = base.test.extend({
    authenticatedPage: async ({ browser }, use) => {


        const context = await browser.newContext()
        const page = await context.newPage();

        await page.goto('https://rahulshettyacademy.com/client/');
        await page.locator('#userEmail').fill('bcrashwin@gmail.com');
        await page.locator('#userPassword').fill('Rash@123');
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle');
        await use(page)
        await context.close();
    },
    createOrder: async ({ }, use) => {
        const apiContext = await request.newContext()
        const apiUtils = new APiUtils(apiContext, loginPayload);
        const response = await apiUtils.createOrder(orderPayload);
        await use(response)
        await apiContext.dispose();

    },
    testDataOrder: {

        productName : 'Adidas Original'
    }





}



)