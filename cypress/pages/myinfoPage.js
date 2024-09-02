class MyInfoPage {
    selectorList() {
        const selectors = {
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
            dataBloodTypeField: '.oxd-select-dropdown > :nth-child(5)',
            testFieldText: "[options='']",
            submitMyInfoButton: "[type='submit']",
            validationToastContainer: '.oxd-toast-container'
        }
        return selectors
    }
    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }
    fillEmployee(employeeID, otherID, driveLicenseNumber, dataCalendar) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeID)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherID)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driveLicenseNumber)
        cy.get(this.selectorList().dateCalendarField).eq(0).type(dataCalendar)
        cy.get(this.selectorList().calendarCloseButton).click()
    }
    fillStatus(birthDate,testField) {
        cy.get(this.selectorList().dataSelectors).eq(0).click()
        cy.get(this.selectorList().dataNationalityChoose).click()
        cy.get(this.selectorList().dataSelectors).eq(1).click()
        cy.get(this.selectorList().dataMaritialChoose).click()
        cy.get(this.selectorList().dateCalendarField).eq(1).type(birthDate)
        cy.get(this.selectorList().calendarCloseButton).click()
        cy.get(this.selectorList().dataGenderField).eq(0).click()
        cy.get(this.selectorList().dataSelectors).eq(2).click()
        cy.get(this.selectorList().dataBloodTypeField).click()
        cy.get(this.selectorList().testFieldText).clear().type(testField)
    }
    submitSaveInfoButton() {
        cy.get(this.selectorList().submitMyInfoButton).eq(0).click()
        cy.get(this.selectorList().validationToastContainer)
    }
}

export default MyInfoPage