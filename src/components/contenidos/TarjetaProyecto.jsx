import { Card, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"

const TarjetaProyecto = (props) => {

    const [borderColor, setBorderColor] = useState('red');

    const { titulo, descripcion, imagen, url } = props

    useEffect(() => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBorderColor(randomColor);
    }, []);

    const applyHoverClass = (url !== "0") ? "imagen-hover" : "";

    const renderLink = (url !== "0") ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <Card.Img variant="top" src={imagen} style={{ width: '100%' }} className={applyHoverClass} />
        </a>
    ) : (
        <Card.Img variant="top" src={imagen} style={{ width: '100%' }} className={applyHoverClass} />
    );

    return (
        <>
            <Row>
                <Col>
                    <Card style={{ width: '100%', backgroundColor: '#35393f', borderLeft: `5px solid ${borderColor}`, marginBottom: '5%' }}
                        className="text-white proyecto">
                        <Card.Body>
                            <Card.Title className="text-start">{titulo}</Card.Title>
                            <Card.Text className="text-end opaco texto-responsivo">
                                {descripcion}
                            </Card.Text>
                        </Card.Body>
                        <div className="align-items-center" >
                            {renderLink}
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default TarjetaProyecto
