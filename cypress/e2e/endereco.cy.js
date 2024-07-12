///<reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.user, dados.password)
        })
    });
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Dodoca', 'Pindoba', 'IA', 'Brasil', 'Rua 01 Terra Feia', 'Loteamento', 'Iguatu', 'Ceará', '63505-402', '8899241132', 'testeteste@gmail.com');
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});