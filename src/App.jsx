import './App.css'
import { Card, Image, Container, Row, Col } from 'react-bootstrap'
import Titulo from './components/Titulo'
import Tabs from './components/Tabs'
import Banner from '../src/img/background-min.jpg';
import Github from './img/github24.svg'
import Linkedin from './img/linkedin24.svg'

function App() {

  const enlaceGithub = 'https://github.com/brandonimous';
  const enlaceLinkedin = 'https://www.linkedin.com/in/brandonf-perez/';

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} >
            <Image src={Banner} className='contenedor img-responsiva' style={{ borderRadius: '2% 2% 0% 0%' }} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className='bg-dark text-white contenedor contenedor-responsivo' style={{ borderRadius: '0% 0% 2% 2%' }}>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Titulo />
                    </Col>
                  </Row>
                  <Row>
                    <hr className='opaco divisor' />
                  </Row>
                  <Row className="justify-content-center">
                    <Tabs />
                  </Row>
                </Container>
              </Card.Body>

              <Card.Footer>
                <Container>
                  <Row>
                    <Col>
                      <div className="text-start">
                        <a href={enlaceGithub} target="_blank" rel="noreferrer">
                          <img src={Github} alt="Github" className="iconos" />
                        </a>
                        <a href={enlaceLinkedin} target="_blank" rel="noreferrer">
                          <img src={Linkedin} alt="Linkedin" className="iconos" />
                        </a>
                      </div>
                    </Col>
                    <Col>
                      <p className='text-end opaco'>© 2023 Brandon Perez</p>
                    </Col>
                  </Row>
                </Container>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
