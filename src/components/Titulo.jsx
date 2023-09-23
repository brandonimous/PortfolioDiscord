import { Row, Col, Card } from "react-bootstrap"
import Contactar from "./Contactar"
import Perfil from '../img/profile-min.jpg'

const Titulo = () => {

    return (
        <>
            <Row className='align-items-center'>
                <Col xs={12} md={3}>
                    <div className="contenedor-perfil">
                        <img src={Perfil} alt="Descripción de la imagen" />
                    </div>
                </Col>
                <Col xs={12} md={7} className='text-center'>
                    <Row>
                        <Card.Title className='bold'>Brandon Perez</Card.Title>
                    </Row>
                    <Row>
                        <Card.Text className='opaco subtitulo'>
                            | Software Engineer | Front End | Web Developer | ASP.NET | React.js |
                        </Card.Text>
                    </Row>
                </Col>
                <Col xs={12} md={2} className="text-center boton">
                    <Contactar />
                </Col>
            </Row>
        </>
    )
}

export default Titulo
