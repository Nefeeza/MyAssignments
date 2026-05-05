import test from "@playwright/test";

test('Dropdown', async({page}) => {

    await page.goto('https://www.leafground.com/select.xhtml;jsessionid=node01prp2n8sh7yevcp8ad3zv9h7b15403973.node0');

    const dropdown = page.locator('//select[@class="ui-selectonemenu"]/option');
    const dropdownCount = await dropdown.count();
    console.log(`No of value in the dropdown is ${dropdownCount}`);
    await page.waitForTimeout(3000);

    for (let index = 0; index < dropdownCount; index++) {
    console.log(await dropdown.nth(index).innerText());
    }

    // console.log(await dropdown.nth(0).innerText()); 
    // console.log(await dropdown.nth(1).innerText());
    // console.log(await dropdown.nth(2).innerText());


})