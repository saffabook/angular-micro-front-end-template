Cypress.config('defaultCommandTimeout', 1000);

describe('Check rendering', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8081/demo/')
    cy.wait(1000); // Pause for 1 second
  });

  it('should have template', () => {
    cy.get('app-custom-element').should('exist');
    // implement method to test for shadow dom
  });
});