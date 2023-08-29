
import { Button } from 'antd'
import './styles/App.scss'

const App: React.FC = () => {
  const items = ['1', '2', '3', '4', '5','6']
  const toggleVertical = () => {
    console.log('haha')
  }
  return (
    <section>
      <header>
        <h1>Layout & Style</h1>
        <div>En</div>
      </header>
      <main className=''>
        <div className='button-container'>
          <Button className='button'>
              <div className='triangle-left'></div>
          </Button>
          <Button className='button'>
          <div className='triangle-upright'></div>
          <div className='triangle-downward'></div>
          </Button>
          <Button className='button'>
            <div className='triangle-right'></div>
          </Button>
        </div>
        <div className='grid-container'>
          <div className='grid-item-1'>
            <div className='square'></div>
          </div>
          <div className='grid-item-2'>
            <div className='circle'></div>
          </div>
          <div className='grid-item-3'>
            <div className='oval'></div>
          </div>
          <div className='grid-item-4'>
            <div className='trapezoid'></div>
          </div>
          <div className='grid-item-5'>
            <div className='rectangle'></div>
          </div>
          <div className='grid-item-6'>
            <div className='rhombus'></div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default App
