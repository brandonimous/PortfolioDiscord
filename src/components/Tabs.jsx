import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import SobreMi from './contenidos/SobreMi';

const Tabs = () => {
    const [contenidoActivo, setContenidoActivo] = useState(1);

    const toggleContenido = (i) => {
        setContenidoActivo(i);
    };

    return (
        <>
            <Nav variant="underline" defaultActiveKey="link-1" className='texto-claro'>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => toggleContenido(1)}>Sobre mí</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => toggleContenido(2)}>Proyectos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={() => toggleContenido(3)}>Contacto</Nav.Link>
                </Nav.Item>
            </Nav>

            {contenidoActivo === 1 && <SobreMi />}
            {contenidoActivo === 2 && <>Contenido 2</>}
            {contenidoActivo === 3 && <>Contenido 3</>}

        </>
    );
}

export default Tabs;
