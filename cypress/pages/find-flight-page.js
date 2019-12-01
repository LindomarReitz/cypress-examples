export function navigate(baseUrl) {
    cy.visit(baseUrl)
}

export function selectDepartureCity(city) {
    cy.get('[name="fromPort"]').select(city)
}

export function selectDestinationCity(city) {
    cy.get('[name="toPort"]').select(city)
}

export function clickOnFindFlights() {
    cy.get('.btn-primary').click()
}
