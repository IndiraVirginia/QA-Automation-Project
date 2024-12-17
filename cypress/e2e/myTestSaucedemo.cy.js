
describe('Flujo completo en SauceDemo', () => {
     beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.fixture('users').then((users) => {
        cy.login(users.standard_user); // Comando personalizado para el login
        cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
      });
    }); 

  
    // Test Case: Login con el usuario 'standard_user'
    it('Login con el usuario estándar', () => {
      // Validar que se cargó correctamente la página de inventario
      cy.url().should('include', '/inventory.html');
      cy.contains('Products').should('be.visible');
    });
  
    // Test Case: Agregar productos al carrito
    it('Agregar productos al carrito', () => {
      // Agregar dos productos
      cy.addToCart(0); // Agregar el primer producto 
      cy.addToCart(1); // Agregar el segundo producto
  
      // Validar que el contador del carrito muestra "2"
      cy.get('.shopping_cart_badge').should('have.text', '2');
  
      // Validar que los productos están en el carrito
      cy.get('.shopping_cart_link').click();
      cy.contains('Your Cart').should('be.visible');
      cy.get('.cart_item').should('have.length', 2);
    });
  
    // Test Case: Iniciar y completar el checkout
    it('Realizar el checkout', () => {
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      cy.url().should('include', '/checkout-step-one.html');
  
      // Llenar el formulario de checkout
      cy.checkoutForm('Indi', 'Rueda', '202030');
  
      // Finalizar compra
      cy.get('[data-test="finish"]').click();
      cy.contains('Thank you for your order!').should('be.visible');
    });
  
    // Test Case: Logout
    it('Realizar logout', () => {
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
      cy.url().should('include', '/');
    });
  });