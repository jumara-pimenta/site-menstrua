import { useState } from "react";
import {
  midiaSection,
  tituloMidia,
  containerVideos,
  videoContainer,
  iframeStyle,
  arrowStyle,
} from "./midiaStyles";

const Midia = () => {
  const videos = [
    { url: "https://www.youtube.com/embed/gjLai4qYLoc", title: "Entrevista 1" },
    { url: "https://www.youtube.com/embed/GEEbtW6mows", title: "Entrevista 2" },
    { url: "https://www.youtube.com/embed/QWBMUrJD4sc", title: "Entrevista 3" },
    { url: "https://www.youtube.com/embed/F49QiUZFJso", title: "Entrevista 4" },
    { url: "https://www.youtube.com/embed/UkzejkgXkUE", title: "Entrevista 5" },
    { url: "https://www.youtube.com/embed/c5lL0-LxJdQ", title: "Entrevista 6" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerPage = 3;

  // Avança de forma circular
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + videosPerPage) % videos.length);
  };

  // Volta de forma circular
  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      // adiciona videos.length para evitar negativo antes do modulo
      return (prev - videosPerPage + videos.length) % videos.length;
    });
  };

  // Gera exatamente videosPerPage vídeos, com wrap-around usando modulo
  const visibleVideos = Array.from({ length: videosPerPage }).map((_, i) => {
    const idx = (currentIndex + i) % videos.length;
    return { ...videos[idx], _idx: idx }; // adiciona _idx só para a key
  });

  return (
    <section style={midiaSection} id="midia">
      <h2 style={tituloMidia}>Entrevistas</h2>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <button onClick={handlePrevious} style={arrowStyle} aria-label="Anterior">
          &#8249;
        </button>

        <div style={containerVideos}>
          {visibleVideos.map((video) => (
            <div key={video._idx} style={videoContainer}>
              <iframe
                src={video.url}
                title={video.title}
                style={iframeStyle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <button onClick={handleNext} style={arrowStyle} aria-label="Próximo">
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Midia;
