import './App.scss';
import { Header, Calendar } from './components';
import plan from "./_plan"

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
      <Calendar plan={plan}/>
      </div>
    </div>
      
  );
}

export default App;
