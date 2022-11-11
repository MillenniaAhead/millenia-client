import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessSetup from './Components/BusinessSetup';
import TeamSize from './Components/TeamSize';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<TeamSize/>}> </Route>
        <Route path='/setUp' element={<BusinessSetup></BusinessSetup>}/>
      </Routes>
    </div>
  );
}

export default App;
