import './App.css';
import Nav from './components/Nav';
import Today from './components/Today';
import Pages from './components/Pages'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navContainer'>
          <Nav />
          <div className='todayContainer'>
            <Today />
          </div>
        </div>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
