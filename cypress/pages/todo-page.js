export function navigate(baseUrl) {
    cy.visit(baseUrl)
}

export function setTodoText(text) {
    cy.get('.new-todo').type(text + '{enter}')
}

export function validateTodoText(elementIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${elementIndex + 1}) label`).should('have.text', expectedText)
}

export function toggleTodo(elementIndex) {
    cy.get(`.todo-list li:nth-child(${elementIndex + 1}) .toggle`).click()
}