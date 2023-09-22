import { Button, Container, Row, Col } from "react-bootstrap"
import CvEnglish from '../../doc/English-CV.pdf'
import CvEspanol from '../../doc/Espanol-CV.pdf'

const Cv = () => {
    return (
        <>
            <Container className="contenido-tab">
                <Row>
                    <Col xs={6} >
                        <Button href={CvEnglish} target="_blank" variant="success">
                            View English CV
                        </Button>
                    </Col>
                    <Col xs={6} >
                        <Button href={CvEspanol} target="_blank" variant="success">
                            CV en Español
                        </Button>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Cv
