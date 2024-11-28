/// <reference types="cypress" />

describe('Registration tests', () => {
  let email
  beforeEach('Navigate to automationexercise', () => {
    email = `alem${Date.now()}@example.com`
    cy.visit('https://automationexercise.com/')
  })

  it('Navigate to registration form', () => {
    // When
    cy.get('a[href*="login"]').should('be.visible').click()

    // Then
    cy.get('.signup-form').should('be.visible')

    //When
    cy.get('[data-qa="signup-name"]').clear().type('Alem')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()

    //Then
    cy.get('form[action*="signup"').should('be.visible')
  })
  it('Successfull registration', () => {
    // When
    cy.get('a[href*="login"]').should('be.visible').click()

    // Then
    cy.get('.signup-form').should('be.visible')

    //When
    cy.get('[data-qa="signup-name"]').clear().type('Alem')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()

    //Then
    cy.get('form[action*="signup"').should('be.visible')

    //When
    cy.get('input[type="radio"]').should('be.visible').check('Mr')
    cy.get('[data-qa="email"]')
      .should('be.disabled')
      .and('have.attr', 'value', email)
    cy.get('[data-qa="password"]').clear().type('Test123')
    cy.get('[data-qa="days"]').select(13)
    cy.get('[data-qa="months"]').select(2)
    cy.get('[data-qa="years"]').select('1997')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').clear().type('Alem')
    cy.get('[data-qa="last_name"]').clear().type('Korjenic')
    cy.get('[data-qa="company"]').clear().type('QA')
    cy.get('[data-qa="address"]').clear().type('Adresa')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').clear().type('Sarajevo')
    cy.get('[data-qa="city"]').clear().type('Sarajevo')
    cy.get('[data-qa="zipcode"]').clear().type('71000')
    cy.get('[data-qa="mobile_number"]').clear().type('123456789')

    cy.get('[data-qa="create-account"]').should('be.visible').click()

    //Then
    cy.get('[data-qa="account-created"')
      .should('be.visible')
      .and('contain.text', 'Account Created!')
  })

  it('Successfull login after registration', () => {
    // When
    cy.get('a[href*="login"]').should('be.visible').click()

    // Then
    cy.get('.signup-form').should('be.visible')

    //When
    cy.get('[data-qa="signup-name"]').clear().type('Alem')
    cy.get('[data-qa="signup-email"]').clear().type(email)
    cy.get('[data-qa="signup-button"]').click()

    //Then
    cy.get('form[action*="signup"').should('be.visible')

    //When
    cy.get('input[type="radio"]').should('be.visible').check('Mr')
    cy.get('[data-qa="email"]')
      .should('be.disabled')
      .and('have.attr', 'value', email)
    cy.get('[data-qa="password"]').clear().type('Test123')
    cy.get('[data-qa="days"]').select(13)
    cy.get('[data-qa="months"]').select(2)
    cy.get('[data-qa="years"]').select('1997')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').clear().type('Alem')
    cy.get('[data-qa="last_name"]').clear().type('Korjenic')
    cy.get('[data-qa="company"]').clear().type('QA')
    cy.get('[data-qa="address"]').clear().type('Adresa')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').clear().type('Sarajevo')
    cy.get('[data-qa="city"]').clear().type('Sarajevo')
    cy.get('[data-qa="zipcode"]').clear().type('71000')
    cy.get('[data-qa="mobile_number"]').clear().type('123456789')

    cy.get('[data-qa="create-account"]').should('be.visible').click()

    //Then
    cy.get('[data-qa="account-created"')
      .should('be.visible')
      .and('contain.text', 'Account Created!')

    //When
    cy.get('a[href*="login"]').should('be.visible').click()

    //Then
    cy.get('.fa-user').should('be.visible')
    cy.get('a').contains('Logged in as Alem')
    cy.get('a[href*=logout]')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(165, 42, 42)')
  })
})
