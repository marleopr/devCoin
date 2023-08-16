// import './App.css';
import Header from './components/Header';
import './components/styled.css';
import HomePage from './pages/homePage/HomePage';
import HomePageCripto from './pages/homePage/HomePageCripto';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', padding: '5px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Header />
        {/* <HomePage /> */}
        <HomePageCripto />
      </div>
    </div>
  );
}

export default App;
