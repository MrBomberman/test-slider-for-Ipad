import './App.css';
import global from './common/images/global.png';
import bottomDescr from './common/images/shape1.png';
import FirstPage from './components/FirstPage';


function App() {
  return (
    <div className="App">
      <img className='homeBtn' src={global} alt='home button'/>
      <FirstPage/>
      <img className='bottomDescr' src={bottomDescr} alt='name of company'/>
    </div>
  );
}

export default App;
