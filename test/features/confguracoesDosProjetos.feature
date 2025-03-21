Feature: Configuracoes dos projetos

@tela-inicial-backoffice @cadastro-projeto @smoke-test
Scenario: 01 - Administrador acessa o menu de projetos
  Given que o usuário administrador está na tela inicial
  When ele clica na aba "Projetos"
  Then a opção "Criar novo projeto" deve estar disponível
  And a lista de projetos existentes deve estar visível na parte inferior da tela
  And a caixa de pesquisa de projetos deve estar disponível

@cadastro-projeto @completo
Scenario: 02 - Administrador cadastra projeto completo
  Given que o usuário administrador está na tela inicial
  When ele clica na opção criar novo projeto
  #  And preenche o nome do projeto
  #  And preenche a descrição do projeto
  #  And clica no botão Next
  #  And seleciona a aplicação "Import Wizard Sample (IW)"
  #  And clica no botão Next
  #  And seleciona o módulo "importWizardSample"
  #  And seleciona a entidade "Person"
  #  And preenche o Business Context Name com "Person"
  #  And clica no botão Add Business Context
  #  And clica no botão Next
  #  And esconde a entidade "Adress"
  #  And esconde a entidade "Department"
  #  And esconde a entidade "Organization"
  #  And esconde a coluna "ID"
  #  And seleciona o excel como fonte da dados da coluna "NAME"
  #  And seleciona o excel como fonte da dados da coluna "FIRSTNAME"
  #  And seleciona o excel como fonte da dados da coluna "LASTNAME"
  #  And clica no botão Next
  #  And concede permissão de acesso ao projeto para o usuário "Jonas Kahnwald"
  #  And clica no botão Next
  #  And valida o nome do projeto preenchido
  #  And valida a descrição do projeto preenchida
  #  And valida a aplicação selecionada
  #  And valida o Business Context criado
  #  And valida as entidades configuradas
  #  And valida o usuário com permissão ao projeto
  #  And clica no botão publish
  # Then a mensagem de projeto cadastro é apresentada
