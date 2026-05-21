import {
  ImpactoWrapper,
  StatsSection,
  StatItem,
  StatIcone,
  StatNumero,
  StatLabel,
  HeroSection,
  HeroImagem,
  HeroOverlay,
  HeroConteudo,
  HeroSubtitulo,
  HeroLinha,
  HeroTitulo,
} from "./impactoStyles";

import { FaBoxOpen, FaHandHoldingHeart, FaBookOpen, FaMicrophone, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import fotoProjeto from "../../assets/fotoprojeto1.jpg";

const stats = [
  { icone: <FaBoxOpen />, numero: "+ 2.700", label: "Kits menstruais distribuídos" },
  { icone: <FaHandHoldingHeart />, numero: "+ 62.800", label: "Absorventes distribuídos" },
  { icone: <FaUsers />, numero: "+ 60", label: "Ações de distribuição" },
  { icone: <FaBookOpen />, numero: "+ 35", label: "Atividades sobre saúde menstrual" },
  { icone: <FaMicrophone />, numero: "+ 30", label: "Participações em eventos" },
  { icone: <FaMapMarkerAlt />, numero: "40", label: "Comunidades atendidas" },
];

const Impacto = () => {
  return (
    <ImpactoWrapper>
      <HeroSection>
        <HeroImagem src={fotoProjeto} alt="Impacto do menstRUA" />
        <HeroOverlay />
        <HeroConteudo>
          <HeroSubtitulo>Nosso impacto</HeroSubtitulo>
          <HeroLinha />
          <HeroTitulo>
            Já beneficiamos <span>+ 5.000</span> pessoas
          </HeroTitulo>
        </HeroConteudo>
      </HeroSection>

      <StatsSection>
        {stats.map((stat, i) => (
          <StatItem key={i}>
            <StatIcone>{stat.icone}</StatIcone>
            <StatNumero>{stat.numero}</StatNumero>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsSection>
    </ImpactoWrapper>
  );
};

export default Impacto;
