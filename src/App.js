// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/styled.css';
import { Router } from './routes/Router';
// import SearchAcoes from './pages/Search/SearchAcoes';
// import SearchCriptos from './pages/Search/SearchCriptos';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', boxSizing: 'border-box', padding: '5px', backgroundColor: '#212121' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Header />
        <Router />
        {/* <SearchAcoes /> */}
        {/* <SearchCriptos /> */}
      </div >
      <Footer />
    </div >
  );
}

export default App;
