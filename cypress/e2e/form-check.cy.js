/// <reference types="cypress" />

describe('Validate Name Field (signupName) in Registration Form', () => {

  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.intercept('POST', '**youtubei/v1/log_event**', { statusCode: 204 });
    cy.contains('Sign In').click();
    cy.contains('button', 'Registration').click();
  });

  it('Should show error when Name is empty', () => {
    cy.get('#signupName').focus().blur();
    cy.contains('Name is required').should('be.visible'); 
    cy.get('#signupName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error for invalid characters', () => {
    cy.get('#signupName').type('@@##$$').blur();
    cy.contains('Name is invalid').should('be.visible'); 
    cy.get('#signupName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error if Name is too short (1 character)', () => {
    cy.get('#signupName').type('A').blur();
    cy.contains('Name has to be from 2 to 20 characters long').should('be.visible'); 
    cy.get('#signupName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error if Name is too long (>20 characters)', () => {
    cy.get('#signupName').type('ABCDEFGHIJKLMNOPQRSTUVWXYZ').blur();
    cy.contains('Name has to be from 2 to 20 characters long').should('be.visible'); 
    cy.get('#signupName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

it('Validates name field for single and multiple words', () => {
  // Case 1: valid name (single word)
  cy.get('#signupName').clear().type('John').blur();
  cy.contains('Name is invalid').should('not.exist');
  cy.get('#signupName')
    .should('have.css', 'border-color')
    .and('not.eq', 'rgb(220, 53, 69)'); // border NOT red

  // Case 2: invalid name (two words)
  cy.get('#signupName').clear().type('John Smith').blur();
  cy.contains('Name is invalid').should('be.visible');
  cy.get('#signupName')
    .should('have.css', 'border-color')
    .and('eq', 'rgb(220, 53, 69)'); // border red
});

});