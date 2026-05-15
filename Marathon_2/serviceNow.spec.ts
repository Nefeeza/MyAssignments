import { test, expect } from '@playwright/test';

test(' Launch the ServiceNow application', async({page}) => {

    // 1. Launch the ServiceNow application
    await page.goto('https://dev296651.service-now.com/login.do?');

    // Enter UserName, password and Login
    await page.fill("#user_name", "admin");
    await page.fill("#user_password", "E7i*7wNgX*mM");
    await page.click('#sysverb_login');

    // 6. Click on the All menu from the navigation panel.
    await page.getByRole('menuitem', {name: "All"}).click();

    // 7. Click on Service Catalog from the menu options.
    await page.getByLabel('Service Catalog 3 of 23').click();

    // 8. Switch to the Service Catalog iframe.
    const frame = page.frameLocator('#gsft_main');
    const variable = frame.getByLabel('Mobiles. Cell phones to meet your business needs.');
    await variable.click();

    // 10. Select Apple iPhone 13 Pro from the product list.
    const frame1 = page.frameLocator('#gsft_main');
    await page.mouse.wheel(0, 500);
    const variable1 = frame1.getByRole('link', { name: 'Apple iPhone 13 pro' });
    await variable1.click();

    const frame2 = page.frameLocator('#gsft_main');

    // 11. Choose Yes for the Lost or Broken iPhone option.
    await frame2.getByText('yes').click();

    await frame2.locator('//input[contains(@class, "sc-content-pad")]').fill('9789559867');

    await page.waitForTimeout(2000);

    // 14. Select Sierra Blue as the color option.
    await frame2.locator('//select[contains(@class,"cat_item_option")]').selectOption({ label: 'Unlimited [add $4.00]' });

      
    await page.mouse.wheel(0, 500);

    // 14. Select Sierra Blue as the color option.
    await frame2.getByText('Sierra Blue').click();

    // 15. Select 512 GB as the storage option.
    await frame2.getByText('512 GB [add $300.00]').click();

    await page.mouse.wheel(0, -500);

    // 16. Click on the Order Now button.
    await frame2.getByRole('button', {name: "Order Now"}).click();

    await page.waitForTimeout(3000);

    const frame3 = page.frameLocator('#gsft_main');
    await expect(frame3.getByText('Thank you, your request has been submitted')).toBeVisible();


    await page.screenshot({
      path: 'fold/FullPages.png',
      fullPage: true
    })




})