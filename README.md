# `DevCoin`

<img src="./src/assets/devCoin logo bit.png" width="300px">

#### Site com informações em tempo real das principais informações sobre a bolsa de valores utilizando a API [brapi](https://brapi.dev/).

# `Link`

https://marleo-devcoin.vercel.app/

###### O site tem suporte "adicionar a tela inicial" ou "Instalar PWA" (Progressive Web App).

# `Descrição`

###### O site criado é uma aplicação web de informações úteis sobre ações, criptomoedas, cotações e taxas.

###### O site oferece uma experiência intuitiva, permitindo aos usuários obter informações de:

#### Ações e Criptomoedas:

- Código;
- Valor de mercado;
- Variação diária;
- Preço atual;
- Preço mínimo do dia;
- Preço máximo do dia;
- Data e hora da informação;
- Logotipo da ação;

#### Cotações:

- Cotação em tempo real de:
  -- Dólar Americano (USD);
  -- Euro (EUR);
  -- Libra Esterlina (GBP);
- Conversor de moedas:
  -- Conversão de Real (BRL) para Dólar, Euro e Libra Esterlina;

#### Taxas:

- Índice Nacional de Preços ao Consumidor Amplo (IPCA) acumulado de 12 meses;
- Taxa básica de juros da economia (SELIC atual);

O repositório do projeto pode ser encontrado [aqui](https://github.com/marleopr/devCoin)

| Tela de inicial                               | Ações                                |
| --------------------------------------------- | ------------------------------------ |
| <img src="src\assets\HomePage.jpg" >          | <img src="src\assets\Acoes.jpg" >    |
| Criptomoedas                                  | Cotações                             |
| <img src="src\assets\Criptos.jpg" >           | <img src="src\assets\Cotacoes.jpg" > |
| Conversor de moedas                           | Taxas                                |
| <img src="src\assets\CotacoesConversor.jpg" > | <img src="src\assets\Taxas.jpg" >    |
| Página de Erro                                |                                      |

| <img src="src\assets\ErrorPage.jpg" >

# `Passo a Passo para Instalação do Projeto React:`

##### Pré-requisitos:

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Você pode baixá-los em https://nodejs.org/.
Git instalado em sua máquina. Você pode baixá-lo em https://git-scm.com/.

##### Clone o Repositório:

Abra o terminal (ou Git Bash) e navegue até o diretório onde deseja clonar o projeto.
Execute o comando: git clone https://github.com/marleopr/devCoin.git

##### Acesse o Diretório do Projeto:

Navegue até o diretório do projeto: cd nome-do-repositorio

##### Instale as Dependências:

Execute o comando: npm install
Este comando irá instalar todas as dependências listadas no arquivo package.json.
Configure as Variáveis de Ambiente (se necessário):

##### Execute o Projeto:

Após instalar as dependências, inicie o servidor de desenvolvimento com o comando: npm start
O projeto será executado e estará disponível em http://localhost:3000 no seu navegador.

##### Personalize o Projeto:

Agora você pode personalizar o projeto de acordo com suas necessidades, fazendo alterações nos arquivos do diretório "src".
Construa o Projeto (Opcional):

Se desejar criar uma versão otimizada do projeto para implantação, execute o comando: npm run build
Isso criará uma pasta "build" com os arquivos otimizados para produção.
Implante o Projeto (Opcional):

Você pode implantar o projeto em um servidor web ou em plataformas de hospedagem, como GitHub Pages, Vercel, Netlify, entre outros.

# `Organização do código`

##### Eu optei por organizar o projeto dividindo em pastas:

- Assets: Contém todas as imagens necessárias ao site.
- Components: Contém os loaders utilizados:
  -- CoinLoader.js: Loader utilizado no carregamento de informações da API.
  -- DownloadButton.js: Componente do botão estilizado para instalação via PWA.
  -- EasterEgg.js: Função para apresentar uma mensagem secreta no console de desenvolvimento.
  -- Footer.js: Componente de rodapé.
  -- Header.js: Componente de cabeçalho.
  -- RadioButton.js: Componente do botão menu da tela inicial.
  -- SquareLoader.js: Animação personalizada mostrada quando não há dados solicitados.
  -- Styled.css: Arquivo contendo todas as estilizações CSS presentes no site.
  -- useDebounce.js: Hook React para atrasar as solicitações da API através dos inputs.
- Constants:
  -- BASE_URL.js: Contém a base da API utilizada.
  -- theme.css: Arquivo CSS para padronização de cores do site.
- Pages:
- Acoes / Criptos:
  -- AcoesList.js / CriptosList.js: Componente que renderiza a lista com todas as ações/criptomoedas presentes na API.
  -- CardAcoes.js / CardCriptos.js: Componente que mapeia e renderiza as informações das ações/criptomoedas presentes na API.
  -- SearchAcoes.js / SearchCriptos.js: Componente principal das páginas das ações/criptomoedas.
- Cotacoes:
  -- CardCotacoes.js: Componente que mapeia e renderiza as informações das cotações presentes na API.
  -- Cotacoes.js: Componente principal da páginas de cotações.
  -- ModalCotacoes.js: Componente que exibe a modal de conversão de moedas.
- Taxas:
  -- CardSelic.js / CardTaxas.js: Componente que mapeia e renderiza as informações de taxas.
  -- Taxas.js: Componente principal da página de taxas.
- ErrorPage.js: Página de erro.
- HomePage.js: Componente da tela inicial.
- Routes:
-- Cordinator / Router: Componentes do React Router Dom.


# `Tecnologias utilizadas`

<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
</div>

# `Autor`

#### [Márleo Piber da Rosa](https://github.com/marleopr)

<img src="src\assets\marleopr.jpg">
