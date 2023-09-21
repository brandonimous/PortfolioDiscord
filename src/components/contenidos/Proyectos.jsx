import { Container, Row, } from "react-bootstrap"
import TarjetaProyecto from "./TarjetaProyecto"

const Proyectos = () => {
    return (
        <>
            <Container className="contenido-tab ">

                <TarjetaProyecto
                    titulo="SISLAB"
                    descripcion="Sistema de laboratorio para la Universidad de Sonora,
                    permite a los profesores agendar los laboratorios, los reactivos y herramientas
                    para su uso durante las prácticas."
                    imagen="../../../public/img/proyectos/sislab-img.jpeg"
                    url="0" />

                <TarjetaProyecto
                    titulo="Portfolio"
                    descripcion="Este mismo sitio web, desarrollado con React y Bootstrap, 
                    no es más ni menos que mi portfolio profesional."
                    imagen="../../../public/img/proyectos/sislab-img.jpeg"
                    url="0" />

            </Container>

        </>
    )
}

export default Proyectos
