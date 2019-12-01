export function validateMessage(message) {
    cy.get("h1").contains(message)
}

export function validateStatus(status) {
    cy.get("table").contains(status)
}