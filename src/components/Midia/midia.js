import { useState } from 'react';
import { midiaSection, tituloMidia, containerVideos, videoContainer, iframeStyle, arrowStyle } from './midiaStyles';

const Midia = () => {
    const videos = [
        { url: "https://www.youtube.com/embed/gjLai4qYLoc", title: "Entrevista 1" },
        { url: "https://www.youtube.com/embed/GEEbtW6mows", title: "Entrevista 2" },
        { url: "https://www.youtube.com/embed/QWBMUrJD4sc", title: "Entrevista 3" },
        { url: "https://www.youtube.com/embed/F49QiUZFJso", title: "Entrevista 4" },
        { url: "https://www.youtube.com/embed/UkzejkgXkUE", title: "Entrevista 5" },
        { url: "https://www.youtube.com/embed/c5lL0-LxJdQ", title: "Entrevista 6" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const videosPerPage = 3;

    const handleNext = () => {
        if (currentIndex + videosPerPage < videos.length) {
            setCurrentIndex(currentIndex + videosPerPage);
        }
    };

    const handlePrevious = () => {
        if (currentIndex - videosPerPage >= 0) {
            setCurrentIndex(currentIndex - videosPerPage);
        }
    };

    const visibleVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

    return (
        <section style={midiaSection}>
            <h2 style={tituloMidia}>Entrevistas</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={handlePrevious} style={arrowStyle} disabled={currentIndex === 0}>
                    &#8249; {/* seta para a esquerda */}
                </button>
                <div style={containerVideos}>
                    {visibleVideos.map((video, index) => (
                        <div key={index} style={videoContainer}>
                            <iframe 
                                src={video.url} 
                                title={video.title} 
                                style={iframeStyle}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} style={arrowStyle} disabled={currentIndex + videosPerPage >= videos.length}>
                    &#8250; {/* seta para a direita */}
                </button>
            </div>
        </section>
    );
};


export default Midia;
