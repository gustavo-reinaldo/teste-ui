///<reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta');
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let emailFaker = faker.internet.email();
        let nomeFaker = faker.name.firstName();
        let sobrenomeFaker = faker.name.lastName();

        cy.get('#reg_email').type(emailFaker);
        cy.get('#reg_password').type('teste@teste.com');
        cy.get(':nth-child(4) > .button').click();

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(nomeFaker);
        cy.get('#account_last_name').type(sobrenomeFaker);
        cy.get('.woocommerce-Button').click();

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');

    });

    it('Deve completar o pré cadastro com sucesso usando comandos personalizados', () => {
        let emailFaker2 = faker.internet.email();
        cy.preCadastro(emailFaker2, 'senhamuitomassa@1', 'Gustavo', 'Reinaldo')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });

});