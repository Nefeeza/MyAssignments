// 

import { test, expect } from "@playwright/test"; 

test(`Button Assertion`, async({page}) => {

    await page.goto(`https://leafground.com/button.xhtml`);
    
    // To find "click" button redirect to Dashboard Page
    // await page.locator(`//button[normalize-space()="Click"]`).click();
    // await expect(page).toHaveURL(/dashboard/);
    
    // To check button is Disabled
    await expect(page.locator(`//button[normalize-space()="Disabled"]`)).toBeDisabled();
    
    // To find the position of the "Submit" button and expect Assertion
    const texts = await page.locator('button').allTextContents();
    const index = texts.findIndex(t => t.trim() === 'Submit');
    console.log(`Position: ${index + 1}`);
    expect(index+1).toBe(3);
    
    // To find the "Save" button color and expect Assertion
    const button = page.locator('button:has-text("Save")');
    const bgColor = await button.evaluate(el =>
         window.getComputedStyle(el).backgroundColor
    );
    console.log(bgColor);
    await expect(button).toHaveCSS('background-color', 'rgb(96, 125, 139)');

    // To find height and width of the button
    const btn = page.locator('button:has-text("Submit")').nth(1);
    const box = await btn.boundingBox();
    console.log('Width:', box?.width);
    console.log('Height:', box?.height);
    // await expect(btn).toHaveCSS('width', '85.9583px');
    // await expect(btn).toHaveCSS('height', '33.3333px');
    await expect(btn).toHaveCSS('width', /85/);
    await expect(btn).toHaveCSS('height', /33/);

    // Mouse over and confirm the color changed
    const btnHover = page.locator('button:has-text("Success")').nth(0);
    const before = await btnHover.evaluate(el =>
        window.getComputedStyle(el).backgroundColor
    );

    await btnHover.hover();

    const after = await btnHover.evaluate(el =>
        window.getComputedStyle(el).backgroundColor
    );
    console.log('Before:', before);
    console.log('After:', after);

    expect(before).not.toBe(after);


    // Click the button to display and hide image
    const imageBtn = page.getByRole('button', { name: 'Image' });
    await imageBtn.click();

    //const image = page.locator('div.ui-overlaypanel-content img');
    const image = page.locator('#j_idt88\\:j_idt102\\:j_idt104');
    console.log(await image.count());    
    await expect(image).toBeVisible({ timeout: 5000 });

    await imageBtn.click();
    await expect(image).toBeHidden();

    // How many rounded buttons 
    //const buttons = page.locator('.rounded-button');
    // const buttons = page.locator('div.card:has-text("rounded buttons") button');
    const buttons = page.locator('button.rounded-button');
    const count = await buttons.count();

    console.log('Rounded buttons count:', count);
    expect(count).toBe(4);

})