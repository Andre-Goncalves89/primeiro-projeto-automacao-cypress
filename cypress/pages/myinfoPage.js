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
    typeNameField() {
        cy.get(this.selectorList().firstNameField).clear().type('First')
        cy.get(this.selectorList().lastNameField).clear().type('Last')
    }
    typeEmployeeField() {
        cy.get(this.selectorList().genericField).eq(3).clear().type('Employee')
    }
    typeIDField() {
        cy.get(this.selectorList().genericField).eq(4).clear().type('OtherID')
    }
    typeDLNField() {
        cy.get(this.selectorList().genericField).eq(5).clear().type('DLN')
    }
    typeLEDField() {
        cy.get(this.selectorList().dateCalendarField).eq(0).type('2025-15-07')
        cy.get(this.selectorList().calendarCloseButton).click()
    }
    nationalityChoose() {
        cy.get(this.selectorList().dataSelectors).eq(0).click()
        cy.get(this.selectorList().dataNationalityChoose).click()
    }
    maritialChoose() {
        cy.get(this.selectorList().dataSelectors).eq(1).click()
        cy.get(this.selectorList().dataMaritialChoose).click()
    }
    typeDateOfBirth() {
        cy.get(this.selectorList().dateCalendarField).eq(1).type('2000-01-12')
        cy.get(this.selectorList().calendarCloseButton).click()
    }
    genderChoose() {
        cy.get(this.selectorList().dataGenderField).eq(0).click()
        cy.get(this.selectorList().dataSelectors).eq(2).click()
    }
    bloodTypeChoose() {
        cy.get(this.selectorList().dataBloodTypeField).click()
    }
    typeTestField() {
        cy.get(this.selectorList().testFieldText).clear().type('123')
    }
    submitSaveInfoButton() {
        cy.get(this.selectorList().submitMyInfoButton).eq(0).click()
    }
    validationSavedInfos() {
        cy.get(this.selectorList().validationToastContainer)
    }
}

export default MyInfoPage