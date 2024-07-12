///<reference types="cypress" />
const perfil = require('../fixtures/perfil.json')


context('Funcionalidade de Login', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
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

    it('Deve fazer login com sucesso -> Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.user);
        cy.get('#password').type(perfil.password);
        cy.get('.woocommerce-form > .button').click();
        cy.get('.page-title').should('contain', 'Minha conta');
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.user);
            cy.get('#password').type(dados.password, {log: false});
            cy.get('.woocommerce-form > .button').click();
            cy.get('.page-title').should('contain', 'Minha conta');
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        })
    });

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