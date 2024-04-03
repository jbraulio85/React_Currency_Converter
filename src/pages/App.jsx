import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import CurrencyConverter from '../components/converter/Converter.jsx';
import AdditionalInfo from '../components/aditionalInfo/Aditionalinfo.jsx';

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <CurrencyConverter />
        <AdditionalInfo />
      </main>
    </Router>
  );
}

export default App;

