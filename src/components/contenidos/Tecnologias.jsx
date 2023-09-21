import Etiqueta from "../Etiqueta"
import { Col } from "react-bootstrap"
const Tecnologias = () => {
    return (
        <>

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
            <Col>
                <Etiqueta color={{ color: '#0c9fcb' }}
                    nombre="React.js" />
            </Col>
            <Col>
                <Etiqueta color={{ color: '#00c180' }}
                    nombre="Vue.js" />
            </Col>
            <Col sm={3}>
                <Etiqueta color={{ color: '#d72d2b' }}
                    nombre="SQL Server" />
            </Col>
            <Col>
                <Etiqueta color={{ color: '#81c564' }}
                    nombre="Mongo" />
            </Col>
            <Col>
                <Etiqueta color={{ color: '#6d429c' }}
                    nombre="Asp.Net" />
            </Col>
            <Col sm={4}>
                <Etiqueta color={{ color: '#61dafb' }}
                    nombre="React Native" />
            </Col>

        </>
    )
}

export default Tecnologias
