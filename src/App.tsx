


import FooterPage from './components/footer'
import MainPage from './pages/main'
import { BrowserRouter} from 'react-router-dom'

function App() {


  return (
    <>
 <BrowserRouter>
    <MainPage/>
    <FooterPage/>
    </BrowserRouter>

   
    </>
  )
}

export default App
