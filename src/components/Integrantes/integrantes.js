import { useState } from 'react';
import { useIntegrantesStyles } from './integrantesStyles';

import fotoJumara from '../../assets/integrantes/Integrante.jpeg';
import fotoFernanda from '../../assets/integrantes/Integrante2.jpeg';
import fotoJhen from '../../assets/integrantes/Integrante1.jpeg';
import fotoIza from '../../assets/integrantes/Integrante4.jpeg';
import fotoEve from '../../assets/integrantes/Integrante5.jpeg';
import fotoQuezia from '../../assets/integrantes/Integrante6.jpeg';
import fotoMaria from '../../assets/integrantes/Integrante8.jpeg';
import fotoAna from '../../assets/integrantes/Integrante7.jpeg';

const Integrantes = () => {
    const {
        isMobile,
        sectionIntegrantes,
        tituloIntegrantes,
        containerCartoes,
        cartaoIntegrante,
        imagemIntegrante,
        nomeIntegrante,
        descricaoIntegrante,
        dotsContainer,
        dot,
    } = useIntegrantesStyles();

    const integrantes = [
        { nome: 'Jumara Pimenta', descricao: 'Idealizadora e coordenadora do projeto. É educadora menstrual e ativista ligada à causa da dignidade menstrual e da justiça reprodutiva.', foto: fotoJumara },
        { nome: 'Fernanda Pimenta', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoFernanda },
        { nome: 'Jhennifer Alcântara', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoJhen },
        { nome: 'Izaída Ribeiro', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoIza },
        { nome: 'Eveline Pereira', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoEve },
        { nome: 'Maria Gabriele', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoMaria },
        { nome: 'Ana Pimenta', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoAna },
        { nome: 'Quezia Tavares', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoQuezia },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    if (isMobile) {
        return (
            <section style={sectionIntegrantes}>
                <h2 style={tituloIntegrantes}>Coordenadoras</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={cartaoIntegrante}>
                        <img src={integrantes[currentIndex].foto} alt={`Foto de ${integrantes[currentIndex].nome}`} style={imagemIntegrante} />
                        <h3 style={nomeIntegrante}>{integrantes[currentIndex].nome}</h3>
                        <p style={descricaoIntegrante}>{integrantes[currentIndex].descricao}</p>
                    </div>
                </div>
                <div style={dotsContainer}>
                    {integrantes.map((_, i) => (
                        <button
                            key={i}
                            style={dot(i === currentIndex)}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Ver integrante ${i + 1}`}
                        />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section style={sectionIntegrantes}>
            <h2 style={tituloIntegrantes}>Coordenadoras</h2>
            <div style={containerCartoes}>
                {integrantes.map((integrante, index) => (
                    <div key={index} style={cartaoIntegrante}>
                        <img src={integrante.foto} alt={`Foto de ${integrante.nome}`} style={imagemIntegrante} />
                        <h3 style={nomeIntegrante}>{integrante.nome}</h3>
                        <p style={descricaoIntegrante}>{integrante.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Integrantes;
