const {test, expect,request}=require('@playwright/test');
const {APiUtils}=require('./utils/APiUtils')
const loginPayload={userEmail:"bcrashwin@gmail.com",userPassword:"Rash@123"}
const orderPayload={orders:[{country:"India",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
let response;
const fakePayloadOrders = {data:[],message:"No Orders"}

test.beforeAll(async ()=>
{
    //login api
    const apiContext =await request.newContext()
    const apiUtils = new APiUtils(apiContext,loginPayload);
    response = await apiUtils.createOrder(orderPayload);

   
   
}
);


test('Place the order',async ({page})=>
{

    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto('https://rahulshettyacademy.com/client/');

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route=>{
                 const response=  await page.request.fetch(route.request());
                 let body=JSON.stringify(fakePayloadOrders);
                 route.fulfill(
                    {
                        response,
                        body

                    }
                 )
        }
        
        )

     await page.locator("button[routerlink*='myorders']").click();
     await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
     console.log(await page.locator(".mt-4").textContent());

     

});
