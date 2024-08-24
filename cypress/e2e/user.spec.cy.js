import userData from '../fixtures/user-data.json' 

describe('Orange HRM tests', () => {

  const selectorList = {
    userNameField : "[name='username']",
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
    dataSelectors: '.oxd-select-text-input', 
    dataNationalityChoose: ':nth-child(4) > span',
    dataMaritialChoose: '.oxd-select-dropdown > :nth-child(3)',
    dataGenderField: '.oxd-radio-wrapper',
    dataBloodTypeField: '.oxd-select-dropdown > :nth-child(6)',
    testFieldText: "[options='']",
    submitMyInfoButton: "[type='submit']",
    validationToastContainer: '.oxd-toast-container'
  }

  it('Login - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userSucess.userName)
    cy.get(selectorList.passwordField).type(userData.userSucess.passwordSucess)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('First')
    cy.get(selectorList.lastNameField).clear().type('Last')
    cy.get(selectorList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherID')
    cy.get(selectorList.genericField).eq(5).clear().type('DLN')
    cy.get(selectorList.dateCalendarField).eq(0).type('2025-15-07')
    cy.get(selectorList.calendarCloseButton).click()
    cy.get(selectorList.dataSelectors).eq(0).click()
    cy.get(selectorList.dataNationalityChoose).click()
    cy.get(selectorList.dataSelectors).eq(1).click()
    cy.get(selectorList.dataMaritialChoose).click()
    cy.get(selectorList.dateCalendarField).eq(1).type('2000-01-12')
    cy.get(selectorList.calendarCloseButton).click()
    cy.get(selectorList.dataGenderField).eq(0).click()
    cy.get(selectorList.dataSelectors).eq(2).click()
    cy.get(selectorList.dataBloodTypeField).click()
    cy.get(selectorList.testFieldText).clear().type('123')
    cy.get(selectorList.submitMyInfoButton).eq(0)
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

