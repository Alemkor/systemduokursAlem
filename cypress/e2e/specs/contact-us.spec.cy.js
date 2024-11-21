/// <reference types="cypress" />

describe('Contact us tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://automationexercise.com/')
  })

  it('Navigate to contact us page', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.contains('h2', /Contact Us/i).should('be.visible')
  })

  it('Send message through contact us form', () => {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    cy.url().should('contain', 'contact_us')
    cy.get('[data-qa="name"] ').should('be.visible').clear().type('Alem')
    cy.get('[data-qa="email"] ').clear().type('alemkora@example.com')
    cy.get('[data-qa="subject"] ').clear().type('Naslov')
    cy.get('[data-qa="message"] ').clear().type('Message')
    cy.get('[data-qa="submit-button" ').should('be.enabled').click()
    cy.get('.alert-success').contains(
      'Success! Your details have been submitted successfully.',
      { matchCase: false }
    )
  })

  it.only('Should display a warning when the email field is empty', () => {
    //When
    cy.get('a[href="/contact_us"]').should('be.visible').click()
    //Then
    cy.url().should('contain', 'contact_us')
    //When
    cy.get('[data-qa="name"] ').should('be.visible').clear().type('Alem')
    cy.get('[data-qa="subject"] ').clear().type('Naslov')
    cy.get('[data-qa="message"] ').clear().type('Message')
    cy.get('[data-qa="email"] ').clear()
    cy.get('[data-qa="submit-button" ').should('be.enabled').click()
    //Then
    cy.get('[data-qa="email"]').then(($input) => {
      expect($input[0].validationMessage).to.equal('Please fill in this field.')
    })
  })
})
