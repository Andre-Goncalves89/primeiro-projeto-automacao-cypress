class LoginPage {
    selectorList() {
        const selectors = {
            userNameField : "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors
    }
    AcessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWithUser(username, password) {
        cy.get(this.selectorList().userNameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
}

export default LoginPage