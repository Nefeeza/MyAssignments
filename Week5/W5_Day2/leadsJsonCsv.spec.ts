import { test, expect } from "@playwright/test";
import loginData from '../../../testData/loginData.json' with { type: "json"};
import { readCSV } from "../../../utils/leadsCSVReader.js";

test(`Create Leads using CSV + JSON - Leaftaps`, async({page}) => {

    // Read CSV records
    const leads: any = await readCSV('testData//leads.csv');

    // Get a row 
    const lead = leads[0];
    
    // 1. Navigate to URL
    await page.goto('http://leaftaps.com/opentaps/control/main');

    // 2. Enter the username and password using JSON
    await page.locator('#username').fill(loginData.username);
    await page.locator('#password').fill(loginData.password);

    // 3. Click Login 
    await page.locator('input[type="submit"]').click();

    // 4. Click CRM/SFA 
    await page.locator('//a[normalize-space()="CRM/SFA"]').click();

    // 5. Click Leads
    await page.getByRole('link', { name: 'Leads' }).click();

    // 6. Click Create Leads
    await page.getByRole('link', { name: 'Create Lead' }).click();

    // 7. Fill all the mandatory fields such as Company name, First name and Last name 
    await page.fill('#createLeadForm_companyName', lead.companyName);
    await page.fill('#createLeadForm_firstName', lead.firstName);
    await page.fill('#createLeadForm_lastName', lead.lastName);

    // 8. Select Direct Mail from the Source dropdown using label 
    await page.locator('#createLeadForm_dataSourceId').selectOption({ label: lead.source });

    // 9. Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
    await page.locator('#createLeadForm_marketingCampaignId').selectOption({ value: lead.marketingCampaign });

    // 10. Get the count and print all the values in the Marketing Campaign dropdown
    const marketingOptions = page.locator('#createLeadForm_marketingCampaignId option');

    const marketingCount = await marketingOptions.count();

    console.log('Marketing Campaign Count:', marketingCount - 1);
    console.log('-------------------------');

    for (let i = 1; i < marketingCount; i++) {

        console.log(
            await marketingOptions.nth(i).textContent()
        );

    }
    console.log('--------------------------------------');

    // 11. Select General Services from the Industry dropdown using index
    await page.locator('#createLeadForm_industryEnumId').selectOption({ index: Number(lead.industryIndex) });

    // 12. Select INR from the Preferred Currency dropdown
    const dropdown = page.locator('#createLeadForm_currencyUomId');
    await dropdown.selectOption({ label: lead.currency });
    //await dropdown.press('Enter');

    // Page Scroll
    for (let i = 0; i < 4; i++) {
        await page.mouse.wheel(0,300);
    }

    // 13. Select India from the Country dropdown
    await page.locator('#createLeadForm_generalCountryGeoId').selectOption({ label: lead.country });

    // Wait for state dropdown to load
    await page.waitForTimeout(2000);

    // 14. Select any state from the State dropdown
    await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption({ label: lead.state });

    // 15. Get the count of all states and print the values in the console
    const stateOptions = page.locator('#createLeadForm_generalStateProvinceGeoId option');
    const stateCount = await stateOptions.count();
    console.log('State Count:', stateCount - 1);
    console.log('------------');
    for (let i = 1; i < stateCount; i++) {

        console.log(
            await stateOptions.nth(i).textContent()
        );
    }
    console.log('--------------END--------------');

    // 16. Click Create Lead
    await page.click('.smallSubmit');

})