import { Button, Container, Row, Col } from "react-bootstrap"

const Cv = () => {
    return (
        <>
            <Container className="contenido-tab">
                <Row>
                    <Col>
                        <Button href='/public/doc/English-CV.pdf' target="_blank" variant="success">
                            View English CV
                        </Button>
                    </Col>
                    <Col>
                    <Button href='/public/doc/Espanol-CV.pdf' target="_blank" variant="success">
                            CV en Español
                        </Button>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Cv
