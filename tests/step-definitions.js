const {Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber');
const {expect} = require("playwright/test");
const HerukoLoginPage = require("./Heroku-login/pages/Herokulogin.page");

setDefaultTimeout(120*1000);

let loginPage;

Given("I navigate to Heroku login page", async function() {
    await this.launchBrowser();
    loginPage = new HerukoLoginPage(this.page);
    await loginPage.navigateToHerokuApp();
});

Then("I enter username", async function() {
    await loginPage.enterUsername(this.userName);
});

Then("I enter password", async function() {
    await loginPage.enterPassword(this.password);
});

When('I click on the login button', async function () {
    await loginPage.loginButton.click();
});

Then("I see message Welcome to Secure Area", async function() {
    const welcomeMessage = await this.page.getByText(/welcome to the secure area/i);
    await expect(welcomeMessage).toBeVisible();
});

Then("I enter password as {string}", async function(password) {
    await loginPage.enterPassword(password);
});

Then("I see message Your password is invalid", async function() {
    const errorMessage = await this.page.getByText(/your password is invalid!/i);
    await expect(errorMessage).toBeVisible();
});

Then("I enter username as {string}", async function(username) {
    await loginPage.enterUsername(username);
});

Then("I see message your username is invalid!", async function() {
    const errorMessage = await this.page.getByText(/your username is invalid!/i);
    await expect(errorMessage).toBeVisible();
});
