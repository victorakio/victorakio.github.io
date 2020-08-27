import React from 'react';

import { Title, PortfolioWrapper, PortfolioItem } from './styles';

import githubExplorerPrint from '../../assets/github-explorer.jpg';

const Portfolio = () => {
  return (
    <>
      <Title id="portfolio">Confira meus projetos mais recentes</Title>

      <PortfolioWrapper>
        
        <PortfolioItem href="https://github-explorer-eta.vercel.app/">
          <img src={githubExplorerPrint} alt="Imagem do Github Explorer"/>

          <div>
            <h2>Github Explorer</h2>
            <p>Aplicação FrontEnd construída com React que retorna informações de reposítórios, utilizando a API pública do Github.</p>
          </div>
        </PortfolioItem>

        <PortfolioItem>

        </PortfolioItem>

        <PortfolioItem>

        </PortfolioItem>

        <PortfolioItem>

        </PortfolioItem>

        <PortfolioItem>

        </PortfolioItem>

        <PortfolioItem>

        </PortfolioItem>
      </PortfolioWrapper>
    </>
  )
}

export default Portfolio;