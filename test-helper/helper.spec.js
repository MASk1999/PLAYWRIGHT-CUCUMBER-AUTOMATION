/**
 * This is a playwright test file which can help us in finding the right locators
 * run command npx playwright test --ui to run tests in an interactive mode
 * the playwright.config.js file is configured accordingly
 */

const {test, expect, chromium} = require("playwright/test");
const dotenv = require("dotenv");

dotenv.config();

test("test heruko login", async function({page}) {
    let browser = await chromium.launch({headless: false});
    let context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.getByLabel("Username").fill("tomsmith");
    await page.getByLabel("Password").fill("SuperSecretPassword!");
    await page.getByRole("button", {name: /login/i}).click();
    const message = await page.getByText(/welcome to the secure area/i);
    await expect(message).toBeVisible();
});