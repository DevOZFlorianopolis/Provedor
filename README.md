# OZchallenge

## Sobre a empresa
Com sede em Florianópolis, desde de 2012, a devOZ desenvolve softwares focados em facilitar o mapeamento de dados georreferenciados, com a intenção de gerar informações inteligentes, para decisões estratégicas. Além do desenvolvimento de softwares, temos experiência em integração com hardwares especializados e mobile. Atuamos também na área da saúde em parceria com instituições de ensino e empresas privadas. Trabalhamos com inovação, comprometimento e cooperação, acreditando na transparência da comunicação e valorização das pessoas para a construção de laços duradouros.

## Contextualização

A DevOZ NET é uma empresa que fornece internet na grande Florianópolis. Recentemente a empresa adquiriu parte de seus concorrentes e se viu com um problema grave, não tinha controle de todos os seus novos provedores e os planos que seus novos clientes estavam utilizando. Para resolver isso a DevOZ NET precisa que você desenvolva um sistema de gestão de provedor/planos/clientes.

## Definição das entidades
A implementação deve prever no mínimo 3 entidades:

### Provedor

| Nome do atributo | Tipo          | Comentário                                                                                      |
|------------------|---------------|-------------------------------------------------------------------------------------------------|
| id               | `Identificador`      | Identificador único do provedor                                                                 |
| name             | `string`      | Nome do provedor                                                                                |
| cnpj             | `string`      | CNPJ do provedor                                                                                |
| plans            | `List<Plan>`  | Planos do provedor                                                                              |

### Plano
| Nome do atributo | Tipo          | Comentário                                                                                      |
|------------------|---------------|-------------------------------------------------------------------------------------------------|
| id               | `Identificador`      | Identificador único do plano                                                                 |
| name             | `string`      | Nome do plano                                                                                |
| value            | `number`      | Valor do plano                                                                                |
| provider         | `Provedor`    | Referência ao provedor que possui o plano                                                       |
| clients          | `List<Cliente>`| Clientes do plano                                                  |

### Cliente
| Nome do atributo | Tipo          | Comentário                                                                                      |
|------------------|---------------|-------------------------------------------------------------------------------------------------|
| id               | `Identificador`      | Identificador único do cliente                                                                 |
| name             | `string`      | Nome do cliente                                                                         |
| plan             | `Plano`       | Plano que foi contratado                                                                        |
| sign_date        | `date`        | Data de assinatura do plano                                                                     |

## Requisitos

* Implementação de uma interface básica
* Implementação de um servidor para receber as requisições
* Persistência em banco de dados

### Telas
* Cadastro:
    * Plano
    * Cliente
    * Provedor

* Consulta
    * Buscar um plano por ID
    * Buscar um cliente por ID
    * Todos os provedores
    * Todos os planos de um provedor
    * Todos os clientes de um plano
    * Todos os clientes que realizaram assinatura em um determinado período

### 

## Requisitos adicionais
Esses requisitos não são obrigatórios, mas podem garantir uma melhor avaliação de forma geral.
* Suporte a paginação na listagem de dados
* Suporte a autenticação utilizando login / senha ou outro método de sua escolha

## Tecnologias
Não há requisitos para qual linguagem/bibliotecas/banco de dados devem ser utilizados para resolver o problema. <br>
Siga sempre o [principio KISS](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_KISS).

## Critérios de Avaliação
* Bom uso do git (commits concisos, boas mensagens de commit, etc)
* Boas práticas de programação (nomes de variáveis, tamanho de funções, perfomance)
* Código bem organizado e com uma boa arquitetura
* Uso de bibliotecas para auxiliar o desenvolvimento

## Procedimentos
Para iniciar, crie um Fork do projeto, e ao finalizar faça um pull request para que sua solução seja availiada.

Boa sorte!

Equipe DevOZ	
