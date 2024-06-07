import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Slider from '../../components/Slider';

import { getImages } from '../../utils/getImages';
import { Background, Info, Poster, Container, ContainerButtons } from './styles';
import { Fade } from 'react-awesome-reveal';
import { Link, Element } from 'react-scroll';
import Modal from '../../components/Modal';
import { useNavigate } from "react-router-dom";
import { movieResponse, peopleResponse, seriesResponse, topMoviesResponse, topSeriesResponse } from '../../services/getData';

function Home() {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [series, setSeries] = useState();
  const [people, setPeople] = useState();
  const [scrollDirection, setScrollDirection] = useState('down');
  const [scrollPos, setScrollPos] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      setMovie(await movieResponse());
      setTopMovies(await topMoviesResponse());
      setTopSeries(await topSeriesResponse());
      setSeries(await seriesResponse());
      setPeople(await peopleResponse());
    }

    getAllData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > scrollPos) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  return (
    <>
      {movie && (
        <Element name="top">
          <Background img={getImages(movie.backdrop_path)}>
            {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
            <Container>
              <Fade duration={2000}>
                <Info>
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <ContainerButtons>
                    <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora.</Button>
                    <Button onClick={() => { setShowModal(true) }}>Confira o Trailer.</Button>
                  </ContainerButtons>
                </Info>
              </Fade>
              <Poster>
                <img alt="capa" src={getImages(movie.poster_path)} />
              </Poster>
            </Container>
          </Background>
        </Element>
      )}
      <Link to="top" smooth={true} duration={500}>
        Scroll to Top
      </Link>
      {topMovies && (
        <Fade duration={2000}>
          <Slider info={topMovies} title={'Top Filmes'} route={`/detalhe-filme/`} />
        </Fade>
      )}
      {topSeries && (
        <Fade duration={2000}>
          <Slider info={topSeries} title={'Top Series'} route={`/detalhe-serie/`} />
        </Fade>
      )}
      {series && (
        <Fade duration={2000}>
          <Slider info={series} title={'Séries Populares'} route={`/detalhe-serie/`} />
        </Fade>
      )}
      {people && (
        <Fade duration={2000}>
          <Slider info={people} title={'Artistas Populares'}  />
        </Fade>
      )}
    </>
  );
}

export default Home;
