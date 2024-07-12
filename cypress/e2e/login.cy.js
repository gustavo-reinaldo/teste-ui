///<reference types="cypress" />

context('Funcionalidade de Login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login com sucesso na plataforma', () => {
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.page-title').should('contain', 'Minha conta');
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválidos.', () => {
        cy.get('#username').type('3232@teste.com');
        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido');
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválidos.', () => {
        cy.get('#username').type('aluno_ebac@teste.com');
        cy.get('#password').type('3232@teste.com');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain', 'está incorreta');
    })
})