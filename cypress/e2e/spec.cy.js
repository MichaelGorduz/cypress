/// <reference types="cypress" />

describe('Login to https://qauto.forstudy.space', () => {

  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');

    cy.contains('Sign In').click();
    cy.get('input[id=signinEmail]').type('testguest22@gmail.com');
    cy.get('input[id=signinPassword]').type('Zxcvqwer123');
    cy.wait(1000);
    cy.contains('button', 'Login').click();
  });

  it('Check if you logged in', () => {
     cy.url().should('include', '/panel/garage');
  });

  it('Check that Garage text is visible after login', () => {
  cy.contains('Garage').should('be.visible');
});

  it('Click element by class', () => {
    cy.get('.btn-primary').first().click();
  });

  it('Click element using contains()', () => {
    cy.contains('button', 'Add car').click();
  });

  it('Click the profile button using href', () => {
  cy.get('a.sidebar_btn.-profile[href="/panel/profile"]').click();
});

  it('Click button containing "Add car"', () => {
  cy.contains('button', 'Add car').click();
  cy.get('body').type('{esc}');
});


});
