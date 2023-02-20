import imgBanner from "../../assets/banner.svg";

export const banner = {
    paddingTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    width: '1848px',
    height: '564px',
    backgroundImage: `url(${imgBanner})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    marginTop: '80px'
}

export const info = {
    alignItems: 'flex-start',
    marginLeft: '94px'
}

export const titulo = {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '48px',
    color: 'white',
    width: '500px',
    textAlign: 'initial',     
}

export const infoPobreza = {
    color: '#FFF',
    width: '500px',
    textAlign: 'initial',
    lineHeight: '24px',   
}

export const botoes = {
    display: 'flex',
    marginTop: '26px',
}

export const botaoDoar = {
    width: '16rem',
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
    width: '18rem',
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