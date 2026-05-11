import { test, expect } from '@playwright/test'; 

test('Assertion', async({page}) => {

    // Part 1: Navigate to the page
    await page.goto(`https://leafground.com/input.xhtml`);
    await expect(page).toHaveURL(`https://leafground.com/input.xhtml`);

    // Part 2: Validate a Disabled Textbox
    await expect(page.locator(`//input[@placeholder="Disabled"]`)).toBeDisabled();

    // Part 3: Validate an Enabled Textbox
    await expect(page.locator(`//input[@placeholder="Babu Manickam"]`)).toBeEditable();

    // Part 4: Soft Assertion Practice
    await expect.soft(page.locator(`//input[@value="Chennai"]`)).toBeDisabled();
    console.log(`Above Soft Assertion Code is Failed`);

    // Part 5: Fill Data
    await page.locator(`//input[@placeholder="Babu Manickam"]`).fill("Playwright Learning");
})