import React, { useEffect, useState } from "react";
import { Container, Background, CloseButton } from "./styles";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getMovieVideos } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [videoKey, setVideoKey] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    async function fetchMovieVideos() {
      try {
        const results = await getMovieVideos(movieId);
        if (results && results.length > 0) {
          setVideoKey(results[0].key);
        }
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    }
    fetchMovieVideos();
  }, [movieId]);


  

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setShowModal(false);
    }, 800);
  };

  return (
    <Background visible={visible} onClick={handleClose}>
      {videoKey && (
        <Container onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton>
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
            allowFullScreen
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
