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
    cy.contains('Name required').should('be.visible'); 
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

describe('Validate Last Name Field (signupLastName) in Registration Form', () => {

  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.intercept('POST', '**youtubei/v1/log_event**', { statusCode: 204 });
    cy.contains('Sign In').click();
    cy.contains('button', 'Registration').click();
  });

  it('Should show error when Last Name is empty', () => {
    cy.get('#signupLastName').focus().blur();
    cy.contains('Last name required').should('be.visible'); 
    cy.get('#signupLastName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error for invalid characters in Last Name', () => {
    cy.get('#signupLastName').type('123@!').blur();
    cy.contains('Last name is invalid').should('be.visible'); 
    cy.get('#signupLastName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error if Last Name is too short (1 character)', () => {
    cy.get('#signupLastName').type('X').blur();
    cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible'); 
    cy.get('#signupLastName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error if Last Name is too long (>20 characters)', () => {
    cy.get('#signupLastName').type('ABCDEFGHIJKLMNOPQRSTUVWXYZ').blur();
    cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible'); 
    cy.get('#signupLastName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Validates Last Name field for single and multiple words', () => {
    // ✅ Valid: single word
    cy.get('#signupLastName').clear().type('Doe').blur();
    cy.contains('Last name is invalid').should('not.exist');
    cy.get('#signupLastName')
      .should('have.css', 'border-color')
      .and('not.eq', 'rgb(220, 53, 69)');

    // ❌ Invalid: multiple words
    cy.get('#signupLastName').clear().type('Doe Smith').blur();
    cy.contains('Last name is invalid').should('be.visible');
    cy.get('#signupLastName')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

});

describe('Validate Email Field in Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.intercept('POST', '**youtubei/v1/log_event**', { statusCode: 204 });
    cy.contains('Sign In').click();
    cy.contains('button', 'Registration').click();
  });

  it('Should show error when Email is empty', () => {
    cy.get('#signupEmail').focus().blur();
    cy.contains('Email required').should('be.visible');
    cy.get('#signupEmail')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error for invalid email format', () => {
    cy.get('#signupEmail').type('invalidEmail').blur();
    cy.contains('Email is incorrect').should('be.visible');
    cy.get('#signupEmail')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should accept valid email format', () => {
    cy.get('#signupEmail').clear().type('test@example.com').blur();
    cy.contains('Email is incorrect').should('not.exist');
    cy.contains('Email required').should('not.exist');
    cy.get('#signupEmail')
      .should('have.css', 'border-color')
      .and('not.eq', 'rgb(220, 53, 69)');
  });
});

describe('Validate Password Field in Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.intercept('POST', '**youtubei/v1/log_event**', { statusCode: 204 });
    cy.contains('Sign In').click();
    cy.contains('button', 'Registration').click();
  });

  it('Should show error when Password is empty', () => {
    cy.get('#signupPassword').focus().blur();
    cy.contains('Password required').should('be.visible');
    cy.get('#signupPassword')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error for invalid Password (no digits/caps/etc.)', () => {
    cy.get('#signupPassword').clear().type('password').blur(); // all lowercase, too weak
    cy.contains(
      'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
    ).should('be.visible');
    cy.get('#signupPassword')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should accept valid Password', () => {
    cy.get('#signupPassword').clear().type('Secure123').blur(); // valid password
    cy.contains('Password required').should('not.exist');
    cy.contains('Password has to be from 8 to 15 characters long').should('not.exist');
    cy.get('#signupPassword')
      .should('have.css', 'border-color')
      .and('not.eq', 'rgb(220, 53, 69)');
  });
});

describe('Validate Re-enter Password Field in Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.intercept('POST', '**youtubei/v1/log_event**', { statusCode: 204 });
    cy.contains('Sign In').click();
    cy.contains('button', 'Registration').click();

    // Enter valid password in main field to compare against
    cy.get('#signupPassword').type('Valid123');
  });

  it('Should show error when Re-enter Password is empty', () => {
    cy.get('#signupRepeatPassword').focus().blur();
    cy.contains('Re-enter password required').should('be.visible');
    cy.get('#signupRepeatPassword')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should show error when passwords do not match', () => {
    cy.get('#signupRepeatPassword').type('Mismatch123').blur();
    cy.contains('Passwords do not match').should('be.visible');
    cy.get('#signupRepeatPassword')
      .should('have.css', 'border-color')
      .and('eq', 'rgb(220, 53, 69)');
  });

  it('Should pass when passwords match', () => {
    cy.get('#signupRepeatPassword').clear().type('Valid123').blur();
    cy.contains('Passwords do not match').should('not.exist');
    cy.contains('Re-enter password required').should('not.exist');
    cy.get('#signupRepeatPassword')
      .should('have.css', 'border-color')
      .and('not.eq', 'rgb(220, 53, 69)');
  });
});

describe('Register Button Validation', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
    cy.intercept('POST', '**youtubei/v1/log_event**', { statusCode: 204 });
    cy.contains('Sign In').click();
    cy.contains('button', 'Registration').click();
  });

  it('Register button should be disabled if form data is incorrect or empty', () => {
    // Initially, the button should be disabled
    cy.get('button.btn-primary[type="button"]')
      .should('be.disabled');

    // Fill the form with invalid name and empty other fields
    cy.get('#signupName').type('@@##$$').blur();

    // Register button remains disabled due to invalid data
    cy.get('button.btn-primary[type="button"]')
      .should('be.disabled');

    // Fill valid name but leave other required fields empty
    cy.get('#signupName').clear().type('John');

    // Still disabled because other fields are empty/invalid
    cy.get('button.btn-primary[type="button"]')
      .should('be.disabled');
  });

  it('Register button should be enabled if all form data is valid', () => {
    // Fill valid data for all required fields
    cy.get('#signupName').clear().type('John');
    cy.get('#signupLastName').clear().type('Smith');
    cy.get('#signupEmail').clear().type('john.smith@example.com');
    cy.get('#signupPassword').clear().type('Password1');
    cy.get('#signupRepeatPassword').clear().type('Password1');

    // Now the button should be enabled
    cy.get('button.btn-primary[type="button"]')
      .should('not.be.disabled');
  });
});