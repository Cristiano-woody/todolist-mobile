# TODOLIST-MOBILE

Este é um projeto de um aplicativo de Lista de Tarefas desenvolvido em React Native. O objetivo do aplicativo é fornecer uma maneira fácil e conveniente para os usuários gerenciarem suas tarefas diárias.

## Funcionalidades

O aplicativo possui as seguintes funcionalidades:

- Visualização da lista de tarefas: Os usuários podem ver todas as tarefas existentes em uma lista ordenada.
- Adição de tarefas: Os usuários podem adicionar novas tarefas à lista.
- Exclusão de tarefas: Os usuários podem excluir tarefas da lista.

## Configuração da API

Para iniciar a API, siga os seguintes passos:

- Execute o comando `npm install` para a instalação de todas as dependências necessárias.
- Crie um arquivo chamado `.env` e siga as instruções de conexão com o banco de dados no arquivo `.env.exemple`.
- Após concluir todos os passos acima, execute o comando `npm run dev` para iniciar a API.
- Certifique-se de que a API esteja corretamente conectada ao Banco de Dados.

## Configuração

Para executar o aplicativo em sua máquina local, siga estas etapas:

- Certifique-se de ter o ambiente de desenvolvimento React Native configurado em sua máquina.
- Clone este repositório em sua máquina local.
- Navegue até o diretório do projeto e execute o comando `npm install` para instalar todas as dependências necessárias.
- Certifique-se de ter uma API funcionando corretamente, com as rotas para ler, enviar e excluir dados das tarefas.
- Dentro do projeto, localize os arquivos `src/pages/CreateTask.js`, `src/pages/Tasks.js` e `src/pages/SearchTasks.js` e atualize a URL da API com o endereço correto.
- Execute o comando `npm run dev` para iniciar o aplicativo.
- Certifique-se de ter um emulador Android/iOS em execução ou um dispositivo físico conectado para visualizar o aplicativo.
- Caso a conexão com o aplicativo não funcione, verifique se sua máquina e o dispositivo no qual o aplicativo será executado estão na mesma rede.
- Após seguir todos os passos, a aplicação deverá estar conectada perfeitamente com a API.

## Uso de Aplicativo

O aplicativo possui 3 telas de uso:

- 1º tela: A tela principal, onde as tasks criadas aparecerão, e terão a possibilidade de serem excluídas.
- 2º tela: Tela de criação das tarefas, onde serão determinados os titulos e descrições das tarefas. 
- 3º tela: Tela de procura de tarefas, onde irá permitir o usuário procurar uma tarefa específica.

