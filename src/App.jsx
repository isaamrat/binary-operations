import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Homeview from './pages/Homeview';
import LMVview from './pages/lmv';
import OptimizedMultiplierView from './pages/omv';
import BMMVview from './pages/bmmv';
import Decieeefloatview from './pages/dieeef';
import AboutView from './pages/About';
import ContactView from './pages/Contact';



export default function App() {
  function test() {
    console.log('yes')
  }
  return (
    <div className=''>
      <BrowserRouter>
        {Navbar()}
        <div className=' mt-20'></div>
        {/* {Homeview()} */}
        <Routes>
          <Route path='/binary-operations' element={Homeview()}></Route>
          <Route path='/longmultiplication' element={LMVview()}></Route>
          <Route path='/optimizedmultiplier' element={OptimizedMultiplierView()}></Route>
          <Route path='/mipsmultiplication' element={BMMVview()}></Route>
          <Route path='/decieeefloat' element={Decieeefloatview()}></Route>
          <Route path='/about' element={AboutView()}></Route>
          <Route path='/contact' element={ContactView()}></Route>
          
          

        </Routes>
      </BrowserRouter>
    </div>
  )
}