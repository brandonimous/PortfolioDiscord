import './App.css'
import { Card, Image } from 'react-bootstrap'
import Titulo from './components/Titulo'
import Tabs from './components/Tabs'
import Banner from '../public/img/japan-min.jpg';

function App() {

  return (
    <>
      <div className='image-container'>
        <Image src={Banner} style={{ width: '40rem', borderRadius: '2% 2% 0% 0%' }} />
      </div>
      <Card className='bg-dark text-white' style={{ width: '40rem', height: '100%', borderRadius: '0% 0% 2% 2%' }}>
        <Card.Body>
          <Titulo />
          <hr className='opaco' />
          <Tabs />
        </Card.Body>

        <Card.Footer>
          <p className='text-end opaco'>© 2023 Brandon Perez</p>
        </Card.Footer>
      </Card>

    </>
  )
}

export default App
