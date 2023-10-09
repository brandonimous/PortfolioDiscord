import { Container, } from "react-bootstrap"
import TarjetaProyecto from "./TarjetaProyecto"

import Sislab from '../../img/proyectos/sislab-img-min.jpeg'
import Portfolio from '../../img/proyectos/portfolio-img-min.png'
import Sieh from '../../img/proyectos/sieh-img-min.jpeg'

const Proyectos = () => {
    return (
        <>
            <Container className="contenido-tab ">

                <TarjetaProyecto
                    titulo="SISLAB"
                    descripcion="Planificador de Uso de Laboratorios"
                    imagen={Sislab}
                    url="0" />

                <TarjetaProyecto
                    titulo="SIEH"
                    descripcion="Archivo clínico hospitalario"
                    imagen={Sieh}
                    url="0" />

                <TarjetaProyecto
                    titulo="Portfolio"
                    descripcion="Portafolio de proyectos personal"
                    imagen={Portfolio}
                    url="0" />

            </Container>

        </>
    )
}

export default Proyectos
