// The script should handle tasks like validating the options available, checking correct selections, and asserting dynamic content loading based on selections.

import test from "@playwright/test";

test('Dropdown Assertions', async({page}) => {
    
    // 1. Navigate to
    await page.goto('https://leafground.com/select.xhtml');
    await page.waitForLoadState('networkidle');
    

    //await page.locator(`//select[@class="ui-selectonemenu"]`).click();

    // Select your favorite UI automation tool 
    const selectTool = page.locator("select").filter({ hasText: "Select Tool" });
    await selectTool.selectOption({ label: "Playwright"});

    // Get the count and print of all the values
    //const toolOptions = await selectTool.locator("option").allTextContents();
    const toolSelect = page.locator(`//select[@class="ui-selectonemenu"]/option`);
    const toolCount = await toolSelect.count();
    console.log(`Total number of tools: ${toolCount - 1}`);
    await page.waitForTimeout(3000);

    for (let index = 1; index < toolCount; index++) {
    console.log(await toolSelect.nth(index).innerText());
    }

    // Choose your preferred Country 
    const selectCountry = page.locator(`//div[@class="ui-helper-hidden-accessible"]/select`).filter({ hasText: "Select Country" });
    await selectCountry.selectOption({ label: "India" });
    console.log("Selected country: India");



})

