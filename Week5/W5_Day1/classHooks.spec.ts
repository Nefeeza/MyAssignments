import { test } from "@playwright/test";

test.describe.serial('Hooks', async() => {
      
    test.beforeAll('Setup', async() => {
        console.log('Launch Setup Files');
    })

    test.beforeEach('Login', async({page}) => {
        await page.goto('http://leaftaps.com/opentaps/control/main');
        await page.locator('#username').fill('demoCSR2');
        await page.locator('#password').fill('crmsfa');
        await page.locator('input[value = "Login"]').click();
        await page.locator('//a[contains(text(), "CRM/SFA")]').click();
    })

    test('Click on Leads', async({page}) => {
        await page.locator('//a[contains(text(), "Leads")]').click();
    })

    test('Click on Accounts', async({page}) => {
        await page.locator('//a[contains(text(), "Accounts")]').click();
    })

    test.afterEach('print the status and title of the test', async({page},testinfo)=>{
        console.log(testinfo.status);
        console.log(testinfo.title);
        await page.locator('//a[contains(text(), "Logout")]').click();

    })

    test.afterAll('Final report', async()=>{
        console.log('Runs after all the test');
            
    })
})