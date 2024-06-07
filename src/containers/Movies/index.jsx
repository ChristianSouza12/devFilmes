import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import { getNowPlayingMovies, getMoviesUpcoming, getTopMovies, peopleResponse } from '../../services/getData';
import { getImages } from '../../utils/getImages';
import { Background, Container, ContainerButtons, Info } from './styles';
import { Fade } from 'react-awesome-reveal'; // Import Fade from react-awesome-reveal

function Movies() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState(null);
  const [recentMovies, setRecentMovies] = useState([]);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      try {
        const nowPlaying = await getNowPlayingMovies();
        const upcomingMovies = await getMoviesUpcoming();
        const topMovies = await getTopMovies();
        const artists = await peopleResponse();

        setMovie(nowPlaying[0]); // Assuming nowPlaying returns an array with at least one movie
        setRecentMovies([]); // Set recent movies as empty array as getPopularMovies is not available
        setMoviesUpcoming(upcomingMovies);
        setTopMovies(topMovies);
        setArtists(artists);
      } catch (err) {
        console.error(err);
      }
    }

    getAllData();
  }, []);

  const limitText = (text) => {
    return text.slice(0, 400) + '...';
  };

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <Fade duration={2000}>
               
              </Fade>
            </Info>
          </Container>
        </Background>
      )}
      <Fade duration={2000}>
        <Slider
          info={moviesUpcoming}
          title={'Próximos Filmes'}
          route={`/detalhe-filme/`}
        />
      </Fade>
      <Fade duration={2000}>
        <Slider
          info={topMovies}
          title={'Top Filmes'}
          route={`/detalhe-filme/`}
        />
      </Fade>
      <Fade duration={2000}>
        <Slider
          info={artists}
          title={'Artistas Populares'}
        />
      </Fade>
    </>
  );
}

export default Movies;
