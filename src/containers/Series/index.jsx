import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import { peopleResponse } from '../../services/getData';
import { getImages } from '../../utils/getImages';
import { Background, Container } from './styles';
import { seriesResponse, topSeriesResponse } from '../../services/getData';
import { Fade } from 'react-awesome-reveal'; // Import Fade from react-awesome-reveal

function Series() {
  const [showModal, setShowModal] = useState(false);
  const [seriesData, setSeriesData] = useState([]);
  const [airingTodayData, setAiringTodayData] = useState([]);
  const [topSeriesData, setTopSeriesData] = useState([]);
  const [popularPeopleData, setPopularPeopleData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        
        const series = await seriesResponse();
        const airingToday = await seriesResponse(); // Replace this with your function to fetch series airing today
        const topSeries = await topSeriesResponse();
        const popularPeople = await peopleResponse(); // Replace this with your function to fetch popular people

       

        setSeriesData(series);
        setAiringTodayData(airingToday);
        setTopSeriesData(topSeries);
        setPopularPeopleData(popularPeople);
      } catch (error) {
        console.error("Error fetching series data:", error);
      }
    }

    fetchData();
  }, []);

  const limitText = (text) => {
    return text.slice(0, 400) + '...';
  };

  return (
    <>
      {seriesData && seriesData.length > 0 && (
        <Background img={`${getImages(seriesData[0].backdrop_path)}`}>
          {showModal && (
            <Modal serieId={seriesData[0].id} setShowModal={setShowModal} />
          )}
          <Container>
         
          </Container>
        </Background>
      )}
      {airingTodayData && (
        <Fade duration={2000}>
          <Slider
            info={airingTodayData}
            title={'Séries Novas'}
            route={`/detalhe-serie/`}
          />
        </Fade>
      )}
      {topSeriesData && (
        <Fade duration={2000}>
          <Slider
            info={topSeriesData}
            title={'Top Series'}
            route={`/detalhe-serie/`}
          />
        </Fade>
      )}
      {popularPeopleData && (
        <Fade duration={2000}>
          <Slider
            info={popularPeopleData}
            title={'Artistas Populares'}
          />
        </Fade>
      )}
    </>
  );
}

export default Series;
