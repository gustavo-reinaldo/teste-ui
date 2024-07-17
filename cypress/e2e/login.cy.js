///<reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import loginPage from '../support/page-objects/login.page';

describe('Funcionalidade de Login', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login com sucesso na plataforma', () => {
        loginPage.login('aluno_ebac@teste.com', 'teste@teste.com');
        cy.get('.page-title').should('contain', 'Minha conta');
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá');
    })

    it('Deve fazer login com sucesso -> Usando arquivo de dados', () => {
        loginPage.login(perfil.user,perfil.password)
        cy.get('.page-title').should('contain', 'Minha conta');
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            loginPage.login(dados.user, dados.password)
            cy.get('.page-title').should('contain', 'Minha conta');
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        })
    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválidos.', () => {
        loginPage.login('3232@teste.com','teste@teste.com')
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido');
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválidos.', () => {
        loginPage.login('aluno_ebac@teste.com','3232@teste.com')
        cy.get('.woocommerce-error').should('contain', 'está incorreta');
    })
})
