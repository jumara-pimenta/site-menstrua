import { sectionIntegrantes, tituloIntegrantes, containerCartoes, cartaoIntegrante, imagemIntegrante, nomeIntegrante, descricaoIntegrante } from './integrantesStyles';

import fotoJumara from '../../assets/integrantes/Integrante.jpeg';
import fotoFernanda from '../../assets/integrantes/Integrante2.jpeg';
import fotoJhen from '../../assets/integrantes/Integrante1.jpeg';
import fotoJaque from '../../assets/integrantes/Integrante3.jpeg';
import fotoIza from '../../assets/integrantes/Integrante4.jpeg';
import fotoEve from '../../assets/integrantes/Integrante5.jpeg';


const Integrantes = () => {
    const integrantes = [
        { nome: 'Jumara Pimenta', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoJumara },
        { nome: 'Fernanda Pimenta', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoFernanda },
        { nome: 'Jhennifer Alcântara', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoJhen },
        { nome: 'Jaqueline Figuerôa', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoJaque },
        { nome: 'Izaída Ribeiro', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoIza },
        { nome: 'Eveline Pereira', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoEve },
        { nome: 'Eveline Pereira', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoEve },
        { nome: 'Eveline Pereira', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoEve },
        { nome: 'Eveline Pereira', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit libero, molestie id auctor molestie, fermentum a tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.', foto: fotoEve },
    ];

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
