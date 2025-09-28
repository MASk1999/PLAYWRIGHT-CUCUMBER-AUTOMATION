class HerukoLoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.getByLabel("Username");
        this.passwordField = page.getByLabel("Password");
        this.loginButton = page.getByRole("button", {name: /login/i});
    }

    async navigateToHerokuApp() {
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }

    async enterUsername(username) {
        await this.usernameField.fill(username);
    }

    async enterPassword(password) {
        await this.passwordField.fill(password);
    }
}

module.exports = HerukoLoginPage;