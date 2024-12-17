Cypress.Commands.add('login', (username) => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });
  
  Cypress.Commands.add('addToCart', (index) => {
    cy.get('.inventory_item').eq(index).contains('Add to cart').click();
  });
  
  Cypress.Commands.add('checkoutForm', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
  });