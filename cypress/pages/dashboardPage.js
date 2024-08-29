class DashboardPage {
    selectorList() {
        const selectors = {
            dashboardGrid: '.orangehrm-dashboard-grid',
        }
        return selectors
    }
    dashBoardGrid() {
        cy.get(this.selectorList().dashboardGrid)
    }
}

export default DashboardPage