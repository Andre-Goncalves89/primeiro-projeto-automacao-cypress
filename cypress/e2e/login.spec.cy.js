import userData from '../fixtures/user-data.json' 

describe('Orange HRM tests', () => {

  const selectorList = {
    userNameField : "[name='username'][placeholder='Username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    //sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type(userData.userSucess.userName)
    cy.get(selectorList.passwordField).type(userData.userSucess.passwordSucess)
    cy.get(selectorList.loginButton).click()
    //cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })

  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.userNameFail)
    cy.get(selectorList.passwordField).type(userData.userFail.passwordFail)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)

  })
})

