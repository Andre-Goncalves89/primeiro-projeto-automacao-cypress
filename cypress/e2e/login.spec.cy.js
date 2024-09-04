import userData from '../fixtures/user-data.json' 
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM tests', () => {
  it('Login - sucess', () => {
    loginPage.AcessLoginPage()
    loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.passwordSucess )
    dashboardPage.dashBoardGrid()
  })

  it('Login - fail', () => {
    loginPage.AcessLoginPage()
    loginPage.loginWithUser(userData.userFail.userNameFail,userData.userFail.passwordFail)
    loginPage.checkAcessInvalid()
  })
})

