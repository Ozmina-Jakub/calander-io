import Nav from './components/Nav';
import Account from './components/Account';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Contact from './router/Contact';
import About from './router/About';
import Register from './router/Register';
import Login from './router/Login';
import Tasks from './router/Tasks';
import Pomodorro from './router/Pomodorro';
import Daily from './router/Daily';
import Profile from './router/Profile';
import { AuthProvider } from './context/AuthContext';
import { PointsProvider } from './context/PointsContext';
import Dashboard from './router/Dashboard';

const App = () => {
  return (
    <>
      <AuthProvider>
        <PointsProvider>
          <Nav></Nav>
          <Account></Account>
          <div className="flex">
            <Routes>
              <Route exact path="/" element={<Hero></Hero>}/>
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Tasks" element={<Tasks/>}/>
              <Route path="/Daily" element={<Daily/>}/>
              <Route path="/Pomodorro" element={<Pomodorro/>}/>
              <Route path="/Profile" element={<Profile/>}/>
            </Routes>{/* TODO: make proper anim on page redirect */}
            <Footer></Footer>
          </div>
        </PointsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
