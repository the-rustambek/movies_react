
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';

function App() {
  return (
    <div className="app">
        <Header />
        <Main />
        <Footer className="app-footer" />
    </div>
  );
}

export default App;
