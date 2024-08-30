class MenuPage {
    selectorList() {
        const selectors = {
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardButton: "[href='/web/index.php/dashboard/index']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
            genericHeaderName: '.oxd-topbar-header-breadcrumb',

        }
        return selectors
    }
    acessMyInfo() {
        cy.get(this.selectorList().myInfoButton).click()
    }
    acessAdminPage() {
        cy.get(this.selectorList().adminButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Admin")

    }
    acessPimPage() {
        cy.get(this.selectorList().pimButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("PIM")
    }
    acessLeavePage() {
        cy.get(this.selectorList().leaveButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Leave")
    }
    acessTimePage() {
        cy.get(this.selectorList().timeButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Time")
    }
    acessRecruitmentPage() {
        cy.get(this.selectorList().timeButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Recruitment")
    }
    acessPerformancePage() {
        cy.get(this.selectorList().timeButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Performance")
    }
    acessDashboardPage() {
        cy.get(this.selectorList().timeButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Dashboard")
    }
    acessDirectoryPage() {
        cy.get(this.selectorList().timeButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Directory")
    }
    acessMaintenancePage() {
        cy.get(this.selectorList().timeButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Maintenance")
    }
    acessClaimPage() {
        cy.get(this.selectorList().timeButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Claim")
    }
    acessBuzzPage() {
        cy.get(this.selectorList().timeButton).click()
        cy.get(this.selectorList().genericHeaderName).contains("Buzz")
    }
}

export default MenuPage