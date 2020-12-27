/// <reference types="Cypress" />

import { navigate, selectDepartureCity, selectDestinationCity, clickOnFindFlights } from "../pages/find-flight-page"

import { selectFirstFlight } from "../pages/reservation-page"

import { fillName, fillAddress, fillCity, fillState, fillZipCode, fillCreditCard, clickOnPurchase } from "../pages/purchase-page"

import { validateMessage, validateStatus } from "../pages/confirmation-page"

var faker = require('faker')

context('Simple Travel Agency', () => {
    beforeEach(() => {
        navigate("https://blazedemo.com/")
    })

    it("reserves a flight", () => {
        selectDepartureCity("Boston")
        selectDestinationCity("London")

        clickOnFindFlights()

        selectFirstFlight()

        fillName(faker.name.firstName())
        fillAddress(faker.address.streetAddress())
        fillCity(faker.address.city())
        fillState(faker.address.state())
        fillZipCode(faker.address.zipCode())
        fillCreditCard("Visa", "4242424242424242", 12, 2019, faker.name.firstName())
        
        clickOnPurchase()
        
        var expectedMessage = "Thank you for your purchase today!"
        var expectedStatus = "PendingCapture"

        validateMessage(expectedMessage)
        validateStatus(expectedStatus)
    })
})