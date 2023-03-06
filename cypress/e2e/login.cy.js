/// <reference types="Cypress" />
     describe('Login Swag Labs', () =>{
        beforeEach(() => {
            cy.visit('https://www.saucedemo.com/')
            cy.login()
        })
        
        it('Fazendo uma compra com sucesso e em seguida deslogando da aplicação', () => {
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('.shopping_cart_badge').click()
            cy.get('.title').should('be.visible')
            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="firstName"]').type('Vinicius')
            cy.get('[data-test="lastName"]').type('Sousa')
            cy.get('[data-test="postalCode"]').type('58010-010')
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="finish"]').click()
            cy.get('.complete-header').should('be.visible')
            cy.get('[data-test="back-to-products"]').click()
            cy.get('button[id="react-burger-menu-btn"]').click()
            cy.get('#logout_sidebar_link').click()
            cy.get('.login_logo').should('be.visible', 'Swag Labs') 
        })
    })