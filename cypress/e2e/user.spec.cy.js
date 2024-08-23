import userData from '../fixtures/user-data.json' 

describe('Orange HRM tests', () => {

  const selectorList = {
    userNameField : "[name='username'][placeholder='Username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input-field-bottom-space',
    dateCalendarField: '.oxd-date-input',
    calendarCloseButton: '.--close',
    submitMyInfoButton: "[type='submit']",
    validationToastContainer: '.oxd-toast-container'
  }

  it('Login - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userSucess.userName)
    cy.get(selectorList.passwordField).type(userData.userSucess.passwordSucess)
    cy.get(selectorList.loginButton).click()
    //cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('First')
    cy.get(selectorList.lastNameField).clear().type('Last')
    cy.get(selectorList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherID')
    cy.get(selectorList.genericField).eq(5).clear().type('DLN')
    cy.get(selectorList.dateCalendarField).eq(0).type('2025-07-15')
    cy.get(selectorList.calendarCloseButton).click()
    cy.get(selectorList.submitMyInfoButton).eq(0).click()
    cy.get(selectorList.validationToastContainer)
  })

  it.skip('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.userNameFail)
    cy.get(selectorList.passwordField).type(userData.userFail.passwordFail)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)

  })
})

