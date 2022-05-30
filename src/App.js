import Nav from './components/Nav';
import Account from './components/Account';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Contact from './router/Contact';
import About from './router/About';
import Register from './router/Register';

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Account></Account>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Hero></Hero>}/>
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Register" element={<Register/>}/>
        </Routes>{/* TODO: make proper anim on page redirect */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
