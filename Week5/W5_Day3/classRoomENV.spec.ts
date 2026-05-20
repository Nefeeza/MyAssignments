import {test} from "@playwright/test";
import dotenv from 'dotenv'
import path from 'path';

//to read single env file
//dotenv.config({path:'Utils/qa.env'})

// to read multiple env file
//let fileName = process.env.envFileName || "qa"
//here if i dont set the environment using the command $env:envFile
//it's set as undefined in that scenario by default "prod" should be taken
const fileName = process.env.envFile || "prod";
dotenv.config({path:path.resolve(process.cwd(),`ENV`,`.env.${fileName}`)});

test("Learn to read env file",async({page})=>{
    //console.log(process.env);
    await page.goto(process.env.APP_URL!);
    await page.locator('#username').fill(process.env.APP_USERNAME!);
    await page.locator('#password').fill(process.env.APP_PASSWORD!);
    await page.locator('#Login').click();
    
})