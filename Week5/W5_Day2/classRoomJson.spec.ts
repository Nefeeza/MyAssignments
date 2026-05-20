import { test, expect } from "@playwright/test";
import loginData from "../../../Files/userTestData.json" with { type: "json" };

for(let data of loginData){
    test(`Login with ${data.username}`, async({page}) =>
    {
        await page.goto('https://login.salesforce.com/?locale=in');
        await page.locator('#username').fill(data.username);
        await page.locator('#password').fill(data.password);
        await page.locator('#Login').click();
    })
}

