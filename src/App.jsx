import './App.css'
import { Card, Image } from 'react-bootstrap'
import Titulo from './components/Titulo'
import Tabs from './components/Tabs'

function App() {

  return (
    <>
      <div className='image-container'>
        <Image src="/public/img/japan.jpg" style={{ width: '40rem', borderRadius: '2% 2% 0% 0%' }} />
      </div>
      <Card className='bg-dark text-white' style={{ width: '40rem', height: '40rem', borderRadius: '0% 0% 2% 2%' }}>
        <Card.Body>
          <Titulo />
          <hr className='opaco'/>
          <Tabs />
        </Card.Body>
      </Card>

    </>
  )
}

export default App
