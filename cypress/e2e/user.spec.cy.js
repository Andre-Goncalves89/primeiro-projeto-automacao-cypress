import userData from '../fixtures/user-data.json' 
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myinfoPage = new MyInfoPage()

describe('Orange HRM tests', () => {
  it('Login - sucess', () => {
    loginPage.AcessLoginPage()
    loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.passwordSucess )
    dashboardPage.dashBoardGrid()
    myinfoPage.acessMyInfoPage()
    myinfoPage.typeNameField()
    myinfoPage.typeEmployeeField()
    myinfoPage.typeIDField()
    myinfoPage.typeDLNField()
    myinfoPage.typeLEDField()
    myinfoPage.nationalityChoose()
    myinfoPage.maritialChoose()
    myinfoPage.typeDateOfBirth()
    myinfoPage.genderChoose()
    myinfoPage.bloodTypeChoose()
    myinfoPage.typeTestField()
    myinfoPage.submitSaveInfoButton()
    myinfoPage.validationSavedInfos()
  })

  it.skip('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.userNameFail)
    cy.get(selectorList.passwordField).type(userData.userFail.passwordFail)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)

  })
})

