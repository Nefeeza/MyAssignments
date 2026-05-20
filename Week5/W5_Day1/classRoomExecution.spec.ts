import { test } from "@playwright/test";

test("Launch Amazon",async({page})=>{
    await page.goto('https://www.amazon.in/')
})

test.skip('Lauch flipkart',async({page})=>{
    await page.goto('https://www.flipkart.com/')
})
test.fail('Leaftaps login',async({page})=>{
    await page.goto('https://leafta.com/opentaps/control/login')
    await page.locator('#usernam').fill('demoCSR2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('#label').click()
})
test.fixme('login',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
})
test('test info',async({page})=>{
    test.info().annotations.push({type:'Test Info', description:"this is test info annotation"},
        {type:'Author',description:'Testleaf'}
    )
})

test('Learn to use test.slow',async({page})=>{
    test.slow()
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill('demoCSR2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('#label').click()
})


// import test from "@playwright/test";

// test.describe('smoke testing',async()=>{
//     test.describe.configure({mode:'default',retries:1})
//     test('Launch Amazon',async({page})=>{
//         await page.goto('https://www.amazon.in/')
//     })
//     test('Launch flipkart',async({page})=>{
//         await page.goto('https://www.flkart.com/')
//     })
//    test('Learn to use test.slow',async({page})=>{
//        test.slow()
//        await page.goto('https://leaftaps.com/opentaps/control/login')
//        await page.locator('#username').fill('demoCSR2')
//        await page.locator('#password').fill('crmsfa')
//        await page.locator('.decorativeSubmit').click()
//        await page.locator('#label').click()
//    })
// })