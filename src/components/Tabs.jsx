import { useState } from 'react';
import { Fade, Nav } from 'react-bootstrap';
import SobreMi from './contenidos/SobreMi';
import Cv from './contenidos/Cv';
import Proyectos from './contenidos/Proyectos';

const Tabs = () => {
    const [contenidoActivo, setContenidoActivo] = useState(1);

    const toggleContenido = (i) => {
        setContenidoActivo(i);
    };

    return (
        <>
            <Nav variant="underline" defaultActiveKey="link-1" className='text-light bg-dark'>
                <Nav.Item>
                    <Nav.Link className='tab-boton' eventKey="link-1" onClick={() => toggleContenido(1)}>Sobre mí</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='tab-boton' eventKey="link-2" onClick={() => toggleContenido(2)}>Proyectos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='tab-boton' eventKey="link-3" onClick={() => toggleContenido(3)}>CV</Nav.Link>
                </Nav.Item>
            </Nav>
            <Fade in={contenidoActivo === 1}>
                <div>
                    {contenidoActivo === 1 && <SobreMi />}
                </div>
            </Fade>
            <Fade in={contenidoActivo === 2}>
                <div>
                    {contenidoActivo === 2 && <Proyectos/>}
                </div>
            </Fade>
            <Fade in={contenidoActivo === 3}>
                <div>
                    {contenidoActivo === 3 && <Cv />}
                </div>
            </Fade>
        </>
    );
}

export default Tabs;
