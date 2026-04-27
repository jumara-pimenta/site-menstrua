import { useState } from 'react';
import { useIntegrantesStyles } from './integrantesStyles';

import fotoJumara from '../../assets/integrantes/Integrante.jpeg';
import fotoFernanda from '../../assets/integrantes/Integrante2.png';
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
        { nome: 'Jumara Pimenta', descricao: 'Idealizadora e coordenadora do projeto. Educadora menstrual e ativista nas agendas de dignidade menstrual e justiça reprodutiva. Integra a luta feminista pela vida e pelos direitos das mulheres e também participa de movimentos voltados a mulheres na tecnologia e inovação.', foto: fotoJumara },
        { nome: 'Fernanda Pimenta', descricao: 'Coordenadora do projeto. Publicitária e gestora de projetos com experiência na condução de grandes iniciativas e liderança de equipes. Ativista menstrual, atua fortemente na mobilização de ações comunitárias voltadas ao enfrentamento da pobreza menstrual.', foto: fotoFernanda },
        { nome: 'Jhennifer Alcântara', descricao: 'Líder de voluntariado, responsável pela mobilização, gestão e acompanhamento das equipes em ações de enfrentamento à pobreza menstrual. Bióloga, mestranda em Imunologia Básica e Aplicada (UFAM) e educadora menstrual pela Herself.', foto: fotoJhen },
        { nome: 'Izaída Ribeiro', descricao: 'Liderança responsável por estratégias de mobilização e geração de recursos do projeto, incluindo a produção, circulação e venda de materiais. Psicóloga com pesquisa dedicada à pobreza menstrual e às vivências de mulheres em situação de rua.', foto: fotoIza },
        { nome: 'Eveline Pereira', descricao: 'Líder de ações, atuando na promoção da dignidade menstrual e no desenvolvimento de iniciativas de impacto social. Profissional de Gente & Gestão, formada em Recursos Humanos e estudante de Psicologia.', foto: fotoEve },
        { nome: 'Maria Gabriele', descricao: 'Líder de ações, com atuação na promoção de ações sociais no enfrentamento da pobreza menstrual. Engenheira de Materiais e mestranda em Ciência e Engenharia de Materiais (UFAM).', foto: fotoMaria },
        { nome: 'Ana Pimenta', descricao: 'Líder de ações, atuando em atividades para promoção da dignidade menstrual. Pedagoga, docente e mestra em Educação, com trajetória na formação de jovens líderes, na educação do campo e em práticas docentes.', foto: fotoAna },
        { nome: 'Quezia Tavares', descricao: 'Líder de ações, atuando na articulação com lideranças comunitárias. Engenheira ambiental com foco em gestão de projetos. Ativista ambiental com atuação em organizações voltadas ao enfrentamento da crise climática e relacionadas ao movimento indígena.', foto: fotoQuezia },
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
