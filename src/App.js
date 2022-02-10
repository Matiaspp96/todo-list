import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import All from './components/All'
import Completed from './components/Completed'
import Active from './components/Active'

function App() {
  return (
    <div className='App'>
      <h1 className='title'>#toDoList</h1>
      <hr className='line'></hr>
      <BrowserRouter>
      <Link to='/' className='btn' > All </Link>
      <Link to='/active' className='btn' > Active </Link>
      <Link to='/completed' className='btn'> Completed </Link>
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/completed' element={<Completed/>} />
        <Route path='/active' element={<Active/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
