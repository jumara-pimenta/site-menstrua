import imgBanner from "../../assets/banner.svg";

export const banner = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '2000px',
    height: '560px',
    marginTop: '80px',
    padding: '2rem',
    backgroundImage: `url(${imgBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFF',
    position: 'relative',
};

export const info = {
    width: '50%',
    textAlign: 'center',
}

export const titulo = {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '48px',
    color: 'white',
    width: '600px',
    textAlign: 'initial',
    marginLeft: '94px',
}

export const infoPobreza = {
    color: '#FFF',
    width: '550px',
    textAlign: 'initial',
    lineHeight: '24px', 
    marginLeft: '94px',  
}

export const textoCaixa = {
  position: "absolute",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  fontSize: "12px",
  maxWidth: "220px",
  textAlign: "center",
  color: "black"
};

export const infoPobreza_fonte = {
    color: '#FFF',
    width: '500px',
    fontSize: '12px',
    textAlign: 'initial',
    lineHeight: '24px',  
    marginLeft: '94px', 
}

export const botoes = {
    display: 'flex',
    marginTop: '26px',
}

export const botaoDoar = {
    width: '10rem',
    backgroundColor: '#E72360',
    color: '#FFF',
    fontSize: '16px',
    padding: '16px 40px',
    borderRadius: '2rem',
    textDecoration: 'none',
    lineHeight: '22px',
    marginLeft: '94px',
    fontWeight: 700,
}

export const botaoVoluntariar = {
    width: '12rem',
    color: '#FFF',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '16px 30px',
    borderRadius: '2rem',
    border: '1px solid #EFEFFF',
    lineHeight: '22px',
    fontWeight: 700,
    marginLeft: '40px'
}