import React from "react";

import { Title, PortfolioWrapper, PortfolioItem } from "./styles";

import githubExplorerPrint from "../../assets/github-explorer.jpg";
import akioflixPrint from "../../assets/akioflix.jpg";
import spotfinderPrint from "../../assets/spotfinder.jpg";
import cpsPrint from "../../assets/cps.jpg";

const Portfolio = () => {
  return (
    <>
      <Title id="portfolio">Confira meus projetos mais recentes</Title>

      <PortfolioWrapper>
        <PortfolioItem href="https://github-explorer-eta.vercel.app/">
          <img src={githubExplorerPrint} alt="Imagem do Github Explorer" />

          <div>
            <h2>Github Explorer</h2>
            <p>
              Aplicação FrontEnd construída com React que retorna informações de
              reposítórios, utilizando a API pública do Github.
            </p>
          </div>
        </PortfolioItem>

        <PortfolioItem href="https://akioflix.vercel.app">
          <img src={akioflixPrint} alt="Imagem do Akioflix" />

          <div>
            <h2>Akioflix</h2>
            <p>
              Aplicação React, desenvolvida durante a imersão React da Alura,
              que utiliza uma fake API gerada com json server para alimentar uma
              interface nos moldes do Netflix.
            </p>
          </div>
        </PortfolioItem>

        <PortfolioItem href="https://spotfinder.vercel.app">
          <img src={spotfinderPrint} alt="Imagem do Spotfinder" />

          <div>
            <h2>Spotfinder</h2>
            <p>
              Aplicação em React que se conecta com a API do Spotify para fazer
              buscas de albums existentes na plataforma.
            </p>
          </div>
        </PortfolioItem>

        <PortfolioItem href="https://www.cps.sp.gov.br">
          <img src={cpsPrint} alt="Imagem do portal CPS" />

          <div>
            <h2>Site Institucional CPS</h2>
            <p>
              Site do Centro Paula Souza feito em Wordpress, com tema
              personalizado feito do zero e alguns plugins personalizados.
            </p>
          </div>
        </PortfolioItem>

        <PortfolioItem></PortfolioItem>

        <PortfolioItem></PortfolioItem>
      </PortfolioWrapper>
    </>
  );
};

export default Portfolio;
