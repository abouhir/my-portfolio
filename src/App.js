
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Competence from './components/Competence';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (

    <Routes>
      <Route  element={<Menu />}>
        <Route index element={<Home />} />
        <Route path='/competences' element={<Competence />} />
        <Route path='/formations' element={<Formation />} />
        <Route path='/experiences' element={<Experience />} />
        <Route path='/contacts' element={<Contact />} />
      </Route>
     
  
    </Routes>
  

  );
}

export default App;
