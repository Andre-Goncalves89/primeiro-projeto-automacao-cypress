import userData from '../fixtures/user-data.json' 
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myinfoPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('Orange HRM tests', () => {
  it('Login - sucess', () => {
    loginPage.AcessLoginPage()
    loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.passwordSucess )
    dashboardPage.dashBoardGrid()
    menuPage.acessMyInfo()
    myinfoPage.fillPersonalDetails('first Name' ,'last Name')
    myinfoPage.fillEmployee('123456', '654321','098765', '2025-20-08')
    myinfoPage.fillStatus('22-09-2001','any text...')
    myinfoPage.submitSaveInfoButton()
  })

  it.skip('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.userNameFail)
    cy.get(selectorList.passwordField).type(userData.userFail.passwordFail)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)

  })
})

