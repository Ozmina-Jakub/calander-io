import Nav from './components/Nav';
import Account from './components/Account';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Account></Account>
      <div className="flex">
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
