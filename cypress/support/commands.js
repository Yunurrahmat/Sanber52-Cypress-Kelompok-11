// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('CreateAccount', (firstname,lastname,email,pass,passcon) => { 
  cy.get('#firstname').type(firstname)
  cy.get('#lastname').type(lastname)
  cy.get('#email_address').type(email)
  cy.get('#password').type(pass)
  cy.get('#password-confirmation').type(passcon)
})

Cypress.Commands.add('verifyText', (locator,value) => { 
  cy.get(locator).should('contain.text', value)
})

Cypress.Commands.add('goClick', (locator) => { 
cy.get(locator).click()
})

Cypress.Commands.add('inputType', (locator,value) => { 
  cy.get(locator)
  .should('be.visible')
  .clear
  .type(value)
})




Cypress.Commands.add('goTo', (laman) => {
    cy.visit(laman)
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
