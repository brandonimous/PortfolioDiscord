import { Row, Col, Card } from "react-bootstrap"
import Contactar from "./Contactar"
import Github from '../../public/img/github24.svg'
import Linkedin from '../../public/img/linkedin24.svg'
import Perfil from '../../public/img/profile-min.jpg'

const Titulo = () => {
    return (
        <>
            <Row className='align-items-center'>
                <Col xs={3}>
                    <div className="contenedor-perfil">
                        <img src={Perfil} alt="Descripción de la imagen" />
                    </div>
                </Col>
                <Col xs={6} className='text-start'>
                    <Row>
                        <Card.Title className='bold'>Brandon Perez</Card.Title>
                    </Row>
                    <Row>
                        <Card.Text className='opaco'>
                            | Software Engineer | Front End | Developer | ASP.NET | React.js |
                        </Card.Text>
                    </Row>
                </Col>
                <Col xs={3} >
                    <Row >
                        <Contactar />
                    </Row>
                    <Row>
                        <div style={{ width: '100%', height: '100%' }}>
                            <a href="https://github.com/brandonimous" target="_blank" rel="noreferrer">
                                <img src={Github} alt="Github" className="iconos" />
                            </a>
                            <a href="https://www.linkedin.com/in/brandonf-perez/" target="_blank" rel="noreferrer">
                                <img src={Linkedin} alt="Linkedin" className="iconos" />
                            </a>
                        </div>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Titulo
