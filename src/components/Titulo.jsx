import { Row, Col, Card } from "react-bootstrap"
import Contactar from "./Contactar"
const Titulo = () => {
    return (
        <>
            <Row className='align-items-center'>
                <Col xs={3}>
                    <div className="contenedor-perfil">
                        <img src="img/profile.jpg" alt="Descripción de la imagen" />
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
                    <Row>
                        <Contactar />
                    </Row>
                    <Row>

                        <div className="role">
                            <div className="role-color" style={{background: 'orange'}}>
                                <p>role title</p>
                            </div>
                        </div>

                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Titulo
