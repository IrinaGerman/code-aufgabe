import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Header from './components/Header';
import Update from './pages/Update';
import Delete from './pages/Delete';

function App() {
  return (
    <div className='w-full h-full bg-bg-blue'>
      <Header></Header>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/delete' element={<Delete/>} />
      </Routes>
    </div>
  );
}

export default App;
