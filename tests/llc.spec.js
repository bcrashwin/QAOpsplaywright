const{test, expect} = require('@playwright/test');
test ('playwright special locators', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name :'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    //5 seconds default timeout for except assertions --(timeout-10000)-step level
    expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10_000});
    await page.getByRole("link", {name: 'Shop'} ).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    
    





});

