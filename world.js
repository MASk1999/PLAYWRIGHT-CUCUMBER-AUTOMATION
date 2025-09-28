const { setWorldConstructor } = require("@cucumber/cucumber");
const {chromium} = require("playwright");
const dotenv = require("dotenv");

dotenv.config();

class CustomWorld {
    constructor() {
        this.userName = process.env.LOGIN_USERNAME;
        this.password = process.env.LOGIN_PASSWORD;
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async launchBrowser() {
        this.browser = await chromium.launch({headless: false});
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async closeBrowser() {
        if(this.browser) {
            await this.browser.close();
        }
    }
}

setWorldConstructor(CustomWorld);