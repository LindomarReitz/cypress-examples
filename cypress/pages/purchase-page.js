export function fillName(name) {
    cy.get("#inputName").type(name)
}

export function fillAddress(address) {
    cy.get("#address").type(address)
}

export function fillCity(city) {
    cy.get("#city").type(city)
}

export function fillState(state) {
    cy.get("#state").type(state)
}

export function fillZipCode(zipCode) {
    cy.get("#zipCode").type(zipCode)
}

export function fillCreditCard(type, number, month, year, name) {
    var cardMonthId = "#creditCardYear"
    var cardYearId = "#creditCardMonth"

    cy.get("#cardType").select(type)
    cy.get("#creditCardNumber").type(number)
    cy.get(cardMonthId).clear()
    cy.get(cardMonthId).type(month)
    cy.get(cardYearId).clear()
    cy.get(cardYearId).type(year)
    cy.get("#nameOnCard").type(name)
}

export function clickOnPurchase() {
    cy.get(".btn-primary").click()  
}