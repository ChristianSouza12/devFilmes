import { useEffect, useState } from "react";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import { Fade } from "react-awesome-reveal";  // Importando o Fade

import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
      .then(([movie, videos, credits, similar]) => {
       
        setMovie(movie);
        setMovieVideos(videos);
        setMovieCredits(credits);
        setMovieSimilar(similar);
      }).catch((error) => console.error(error));
    }

    getAllData();
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Fade duration={2000}> {/* Envolvendo o container principal */}
            <Container>
              <Cover>
                <img src={getImages(movie.poster_path)} alt="filme-img" />
              </Cover>

              <Info>
                <h2>{movie.title}</h2>
                <SpanGenres genres={movie.genres}></SpanGenres>
                <p>{movie.overview}</p>
                <div>
                  <Credits credits={movieCredits}></Credits>
                </div>
              </Info>
            </Container>
          </Fade>

          <ContainerMovies>
            {movieVideos && movieVideos.map(video => (
              <Fade duration={2000} key={video.id}> {/* Envolvendo os vídeos */}
                <div>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                    allowFullScreen
                  ></iframe>
                </div>
              </Fade>
            ))}
          </ContainerMovies>

          {movieSimilar && (
            <Fade duration={2000}> {/* Envolvendo o slider */}
              <Slider info={movieSimilar} title={"Talvez você se interesse"} />
            </Fade>
          )}
        </>
      )}
    </>
  );
}

export default Detail;
