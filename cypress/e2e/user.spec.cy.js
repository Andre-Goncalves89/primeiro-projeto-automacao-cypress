import userData from '../fixtures/user-data.json' 
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myinfoPage.js'
import MenuPage from '../pages/menuPage.js'
const Chance = require('chance') 

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()
const chance = new Chance()

describe('Orange HRM tests', () => {
  it('Login - sucess', () => {
    loginPage.AcessLoginPage()
    loginPage.loginWithUser(userData.userSucess.userName, userData.userSucess.passwordSucess )
    dashboardPage.dashBoardGrid()
    menuPage.acessMyInfo()
    myinfoPage.fillPersonalDetails(chance.first(), chance.last())
    myinfoPage.fillEmployee(chance.cf(), chance.cf(),chance.cpf(), chance.date({string: true},{year: 2025}))
    myinfoPage.fillStatus(chance.birthday({string: true}),chance.sentence())
    myinfoPage.submitSaveInfoButton()
  })
})

