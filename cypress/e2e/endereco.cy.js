///<reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.user, dados.password)
        })
    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Dodoca', 'Pindoba', 'IA', 'Brasil', 'Rua 01 Terra Feia', 'Loteamento', 'Iguatu', 'Ceará', '63505-402', '8899241132', 'testeteste@gmail.com');
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].complemento,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        );
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

    it('Deve alterar o endereço de entrega', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].complemento,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email
        );
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});