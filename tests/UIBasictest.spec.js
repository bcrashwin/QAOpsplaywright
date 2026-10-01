const{test, expect} = require('@playwright/test');
test ('Browser context  playwright test',async ({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName= page.locator('#username');
    const passWord=page.locator("[type='password']");
    const signInBtn=page.locator('#signInBtn');
    const cardTitles=page.locator('.card-body a');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await userName.fill('ee');
    await passWord.fill("Learning@830$3mK2");
    await signInBtn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill('rahulshettyacademy');
    await passWord.fill('Learning@830$3mK2');
    await signInBtn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);



})

test('UI controls',async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName= page.locator('#username');
    const passWord=page.locator("[type='password']");
    const signInBtn=page.locator('#signInBtn');
    const dropDown= page.locator("select.form-control");
    const documentLink= page.locator("[href*='documents-request']");
    await dropDown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
   // await page.pause();
   console.log(await page.locator('.radiotextsty').last().isChecked());
   await expect(page.locator('.radiotextsty').last()).toBeChecked();
   await page.locator('#terms').click();
   await expect(page.locator('#terms')).toBeChecked();
   await page.locator('#terms').uncheck();
   expect(await page.locator('#terms').isChecked()).toBeFalsy();
   await expect(documentLink).toHaveAttribute('class','blinkingText');

})

test('child windoww handling',async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentLink = page.locator("[href*='documents-request']");
const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    documentLink.click()
]);
await newPage.waitForLoadState();
const text = await newPage.locator(".red").textContent();
const arrayText = text.split('@');
const domain = arrayText[1].split(' ')[0];
console.log(domain);
await page.locator("#username").fill(domain);
console.log(await page.locator("#username").textContent());
    




    





    
})