import { test, expect } from '@playwright/test';

test('Decathlon Shopping Flow', async({page}) => {

    // 1. Navigate to Decathlon
    await page.goto('https://www.decathlon.in/');
    //await page.waitForLoadState('networkidle');

    // 2. Click on the Search box, Fill and click enter
    const searchBox = page.locator('input[type="search"]');
    await searchBox.click();
    await searchBox.fill('Shoes');
    await searchBox.press('Enter');

    // Select Sport shoes from Category
    // const divCount = page.locator('//aside/child::div').nth(1);
    // const innerDiv = divCount.locator('xpath=//div').nth(1);
    // console.log(await innerDiv.locator('xpath=//button/span').count());
    // await innerDiv.locator('xpath=//button/span').click();
    // console.log(await page.locator("//button[./span[contains(.,'Category')]]").count());
    // await page.locator("//button[./span[contains(.,'Category')]]").click();
    await page.getByRole('button', { name: 'Category' }).press('Enter');
    
    const variable = page.locator('//button/following-sibling::div[@id="nature_id_en"]');
    await variable.locator(`//span[contains(normalize-space(),'Sport shoes')]`).click();

    // Most relevent list
    await page.locator("//button[@aria-haspopup='listbox'][.//span[contains(.,'Most relevant')]]").click();
    await page.getByRole('option', { name: "Highest discount" }).click();
    await page.waitForTimeout(3000);

    // From the filtered results, click on the first available product
    await page.locator(`//div[@data-test-id="search-products-grid"]/div`).first().click();

    // On the product details page, select Size
    const prodInfo = await page.locator('//span[@data-test-id="pdp-product-info-name"]').innerText();
    console.log(prodInfo);
    await page.locator('//button[@aria-label="Select size 4"]').click();

    // Click on the Add to Cart button
    await page.getByRole('button', { name: "Add to cart" }).click();

    // Verify that the product is successfully added to the cart
    await page.locator('//a[@aria-label="Cart"]').click();
    await expect(page.locator('//div[@data-test-id="product-info"]/span').nth(2)).toHaveText(prodInfo);


    

})