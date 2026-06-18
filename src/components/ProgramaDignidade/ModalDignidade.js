import React, { useRef } from "react";
import { overlay, closeBtn } from "../Modal/modalStyles";
import {
  BotaoOndeRetirar,
  Grid,
  Card,
  CardTitulo,
  Lista,
  Item,
  PassoLista,
  PassoItem,
  RetiradaBox,
  RetiradaTitulo,
  RetiradaTexto,
  MapaWrapper,
  ModalTitulo,
  ModalBox,
} from "./ProgramaDignidadeStyles";

const ModalDignidade = ({ aberto, onClose, mapaAberto, onToggleMapa }) => {
  const modalRef = useRef(null);
  const mapaRef = useRef(null);

  if (!aberto) return null;

  const handleOndeRetirar = () => {
    onToggleMapa();
    if (!mapaAberto) {
      setTimeout(() => {
        if (mapaRef.current && modalRef.current) {
          const mapaTop = mapaRef.current.offsetTop;
          modalRef.current.scrollTo({ top: mapaTop, behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <div style={overlay} onClick={onClose}>
      <ModalBox ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <ModalTitulo>Programa Dignidade Menstrual</ModalTitulo>
          <button style={closeBtn} onClick={onClose}>×</button>
        </div>

        <Grid>
          <Card>
            <CardTitulo>Quem tem acesso</CardTitulo>
            <p>Pessoas que menstruam com <strong>idade entre 10 e 49 anos</strong> inscritas no <strong>CadÚnico</strong> que:</p>
            <Lista>
              <Item>Tenham renda mensal de até R$ 218; ou</Item>
              <Item>Sejam estudantes de baixa renda da rede pública com renda familiar por pessoa de até meio salário mínimo; ou</Item>
              <Item>Estejam em situação de rua, sem limite de renda.</Item>
            </Lista>
          </Card>

          <Card>
            <CardTitulo>O que precisa</CardTitulo>
            <Lista>
              <Item>Estar inscrita no CadÚnico</Item>
              <Item>Documento oficial com foto (RG, CNH, CTPS ou similar)</Item>
              <Item>CPF válido ou documento onde conste o CPF</Item>
              <Item>Conta no Gov.br</Item>
              <Item><strong>Autorização do Programa Dignidade Menstrual</strong></Item>
            </Lista>
          </Card>

          <Card>
            <CardTitulo>Passo a passo</CardTitulo>
            <PassoLista>
              <PassoItem>Tenha ou crie sua conta no site ou aplicativo <strong>Gov.br</strong>.</PassoItem>
              <PassoItem>Acesse o site ou baixe o aplicativo <strong>Meu SUS Digital</strong>.</PassoItem>
              <PassoItem>Entre com o CPF e a senha do Gov.br.</PassoItem>
              <PassoItem>Clique em "Programa Dignidade Menstrual" e depois em <strong>"Emitir Autorização"</strong>.</PassoItem>
              <PassoItem>Salve ou imprima a autorização.</PassoItem>
            </PassoLista>
          </Card>

          <RetiradaBox>
            <RetiradaTitulo>Retirada dos absorventes</RetiradaTitulo>
            <RetiradaTexto>
              Vá até uma Farmácia credenciada pelo <strong>Farmácia Popular</strong> e apresente:
            </RetiradaTexto>
            <PassoLista>
              <PassoItem>Documento de identificação oficial com foto e número do CPF.</PassoItem>
              <PassoItem>"Autorização do Programa Dignidade Menstrual", em formato digital ou impresso.</PassoItem>
            </PassoLista>
            <BotaoOndeRetirar ativo={mapaAberto} onClick={handleOndeRetirar}>
              Onde retirar
            </BotaoOndeRetirar>
          </RetiradaBox>
        </Grid>

        {mapaAberto && (
          <MapaWrapper ref={mapaRef}>
            <iframe
              title="Farmácias Populares em Manaus"
              src="https://www.google.com/maps/d/u/0/embed?mid=1JvOxIFDBfmpLCZx8JPyYmE89fDBgfBQ&ehbc=2E312F"
              width="100%"
              height="420"
              style={{ border: "none", borderRadius: "12px" }}
              allowFullScreen
            />
          </MapaWrapper>
        )}
      </ModalBox>
    </div>
  );
};

export default ModalDignidade;
