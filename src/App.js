import Nav from './components/Nav';
import Account from './components/Account';
import Hero from './components/Hero';
import Footer from './components/Footer';
import {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Contact from './router/Contact.js';
import About from './router/About';

const App = () => {
  const [utilState, setutilState] = useState({isInMenu: false, isInRedirerctedSite: false, onSite: "home"});
  return (
    <>
      <Nav utilState={{utilState, setutilState}}></Nav>
      <Account></Account>
      <div className="flex">
          <Routes>
            <Route path="/" element={<Hero utilState={{utilState, setutilState}}></Hero>}/>
            <Route path="/Contact" element={<Contact utilState={{utilState, setutilState}}/>} />
            <Route path="/About" element={<About utilState={{utilState, setutilState}}/>} />
          </Routes>{/* TODO: make proper anim on page redirect */}
        <Footer utilState={{utilState, setutilState}}></Footer>
      </div>
    </>
  );
}

export default App;
