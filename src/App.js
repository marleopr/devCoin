import './components/styled.css';
import { Router } from './routes/Router';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', boxSizing: 'border-box', padding: '5px', backgroundColor: '#212121' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Router />
      </div >
      <Footer />
    </div >
  );
}

export default App;
