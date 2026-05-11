import { test } from '@playwright/test';

test('Click on Leads', async ({ page }) => {

    // Salesforce home page
    await page.goto('https://testleaf.lightning.force.com/lightning/o/UserAppMenuItem/home');

    // Click Leads
    await page.locator('//a[@title="Leads"]').click();

});