import { Container, Row } from "react-bootstrap"
import Tecnologias from "./Tecnologias"

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

                <hr className='opaco' />

                <Row>
                    <Tecnologias />
                </Row>

            </Container>

        </>
    )
}

export default SobreMi
