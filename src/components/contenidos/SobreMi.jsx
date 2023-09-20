import { Container, Row, Col } from "react-bootstrap"
import Etiqueta from "../Etiqueta"

const SobreMi = () => {
    return (
        <>
            <Container className="text-start contenido-tab">

                <Row>

                    <p className="descripcion">
                        Soy Ingeniero de Software y tengo experiencia en desarrollo web y móvil.
                    </p>

                    <p className="descripcion opaco">
                        Vivo en Sonora, México, estudié la Ingeniería en Sistemas de Información en la Unison,
                        formo parte de CSI PRO un club de desarrollo tecnológico.
                    </p>

                    <p className="descripcion">
                        Me gusta aprender constantemente sobre tecnología y en
                        general,
                        trabajar en equipo y compartir conocimientos.
                    </p>

                    <p className="descripcion opaco">
                        También disfruto del powerlifting, el manga y experimentar con
                        tecnología.
                    </p>
                </Row>

                <Row>
                    <Col>
                        <Etiqueta color={{ color: '#ffff00' }}
                            nombre="Javascript" />
                    </Col>
                    <Col>
                        <Etiqueta color={{ color: '#3972a1' }}
                            nombre="Python" />
                    </Col>
                    <Col>
                        <Etiqueta color={{ color: '#f16a30' }}
                            nombre="HTML" />
                    </Col>
                    <Col>
                        <Etiqueta color={{ color: '#006bc0' }}
                            nombre="Javascript" />
                    </Col>
                    <Col>
                        <Etiqueta color={{ color: '#90c53f' }}
                            nombre="Express.js" />
                    </Col>
                    <Col>
                        <Etiqueta color={{ color: '#672179' }}
                            nombre="C#" />
                    </Col>
                    <Col>
                        <Etiqueta color={{ color: '#880afb' }}
                            nombre="Bootstrap" />
                    </Col>
                    <Col>
                        <Etiqueta color={{ color: '#086e92' }}
                            nombre="MySQL" />
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default SobreMi
