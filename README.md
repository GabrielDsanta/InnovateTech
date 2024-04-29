# InnovateTech

Um aplicativo que consumirá a API da randomuser e irá exibir informações importantes para o usuário.

## Passo 1: Clonar o Projeto

Clone este repositório em sua máquina local usando o seguinte comando:

git clone https://github.com/GabrielDsanta/InnovateTech

## Passo 2: Instalar as Dependências

Após clonar o projeto, navegue até a pasta do projeto e instale as dependências utilizando o NPM. Certifique-se de que você tenha o NPM instalado globalmente em sua máquina

cd nome-do-projeto
npm install

## Passo 3: Iniciar o Projeto

Após instalar as dependências você pode iniciar o projeto executando o seguinte comando:

npx expo start

Isso iniciará o projeto em modo de desenvolvimento. Você pode acessá-lo em seu emulador apertando a tecla A (Android).

## Descrição do Projeto

1. Tela de Carregamento: Apresenta a logo da InnovateTech durante o carregamento inicial do aplicativo.
2. Listagem dos Alunos: Exibe os alunos em uma lista, com um limite de 20 alunos por carregamento. Ao chegar no final da listagem, o aplicativo carrega mais 20 alunos.
3. Detalhes do Aluno em Modal: Ao clicar em um aluno, um modal é aberto detalhando as informações do aluno, incluindo:
   - Imagem
   - Nome completo
   - Email
   - Gênero
   - Data de nascimento
   - Telefone
   - Nacionalidade
   - Endereço
   - ID (Número de identificação)

Recursos adicionais:

- Estudo da documentação da REST API da randomuser para consumir os dados dos alunos.
- Utilização do logo da InnovateTech fornecido.
- Liberdade na escolha das cores do aplicativo.
- Implementação das três telas principais do projeto: Tela de Carregamento, Lista de Alunos e Detalhes do Aluno em Modal.
