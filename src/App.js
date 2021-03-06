import Navbar from './components/layout/Navbar';
import Showcase from './components/layout/Showcase';
import Services from './components/layout/Services';
import HowWeWork from './components/layout/HowWeWork';
import OrderForm from './components/layout/OrderForm';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar'
import Installation from './components/layout/Installation';

function App() {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
      <Showcase/>
      <Services/>
      <div className="container">
      <HowWeWork/>
      </div>
    <OrderForm/>
    <Installation />
    <Footer/>
    </div>
  );
}

export default App;
