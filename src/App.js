import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar/index';
import SubMenu from './components/submenu';

function App() {
  return (
    <>
     <Navbar />
     {/* Sidebar */}
     <Hero />
     <SubMenu />
    </>
  );
}

export default App;
