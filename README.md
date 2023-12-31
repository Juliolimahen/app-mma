# MMA Stats

Bem-vindo ao MMA Stats! Esta é uma aplicação que exibe informações sobre lutadores de MMA, permitindo explorar os detalhes de cada um, visualizar o ranking dos melhores lutadores da história considerando o aproveitamentpo, e filtrar os lutadores por gênero.

## Funcionalidades

- Explorar Lutadores: Nesta página, você pode visualizar todos os lutadores disponíveis, suas informações básicas e a foto (caso esteja disponível). Clicando no botão "Informações Detalhadas", é possível ver mais detalhes sobre o lutador, incluindo idade, altura, peso, time, vitórias por KO/TKO, vitórias por finalização e vitórias por decisão.

- Ranking Feminino: Nesta página, são exibidos os lutadores do sexo feminino ordenados pelo melhor aproveitamento (vitórias + empates / 2) / (vitórias + derrotas + empates), em ordem decrescente.

- Ranking Masculino: Nesta página, são exibidos os lutadores do sexo masculino ordenados pelo melhor aproveitamento (vitórias + empates / 2) / (vitórias + derrotas + empates), em ordem decrescente.

## Capturas de Tela

<div style="display: flex; flex-wrap: wrap; justify-content: center; text-align: left;">
  <div>
    <p>1. Página inicial - Explorar Lutadores:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_1.png" alt="Página inicial - Explorar Lutadores" >
  </div>
  <div>
    <p>2. Página inicial - Explorar Lutadores:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_2.png" alt="Página inicial - Explorar Lutadores" >
  </div>
  <div>
    <p>3. Detalhes do Lutador:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_9.png" alt="Detalhes do Lutador" >
  </div>
  <div>
    <p>4. Filtro por Gênero feminino:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_5.png" alt="Filtro por Gênero feminino" >
  </div>
  <div>
    <p>5. Filtro por Gênero masculino:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_6.png" alt="Filtro por Gênero masculino" >
  </div>
  <div>
    <p>6. Busca por nome:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_3.png" alt="Busca por nome 1" >
  </div>
  <div>
    <p>7. Busca por nome:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_4.png" alt="Busca por nome 2">
  </div>
  <div>
    <p>8. Explorar Lutadores responsivo:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_8.png" alt="Busca por nome responsivo 2" width="400">
  </div>
  <div>
    <p>9. Busca por nome responsivo:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_7.png" alt="Busca por nome responsivo 1" width="300">
  </div>
  <div>
    <p>10. Detalhes lutadores responsivo:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_11.png" alt="Detalhes lutadores responsivo 1" width="300">
  </div>
  <div>
    <p>11. Detalhes lutadores sem imagem:</p>
    <img src="https://raw.githubusercontent.com/Juliolimahen/assets/main/web-app-mma/web_12.png" alt="Detalhes lutadores responsivo 2" width="300">
  </div>
</div>

## Como Usar

1. Clone o repositório para sua máquina local usando `https://github.com/Juliolimahen/app-mma.git`.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor de desenvolvimento usando `npm start`.
4. Abra o aplicativo em seu navegador acessando `http://localhost:3000`.

## Tecnologias Utilizadas

- React.js
- Styled Components
- React Router
- Axios (para simular requisições de API)

## Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).

Obs. As imagens dos lutadores foram restiradas dos repositório, pois eles são de propriedade do UFC e o não permite o uso comercial das imagens por terceiros. Para replicar de forma fededigna o projeto basta inserir o link das imagens que deseja exibir no card e ajustar a prorpoção, se necessário.
