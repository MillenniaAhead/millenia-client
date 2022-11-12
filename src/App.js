import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessSetup from './Components/BusinessSetup';
import HearAbout from './Components/HearAbout';
import Software from './Components/Software';
import TeamSize from './Components/TeamSize';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<TeamSize/>}> </Route>
        <Route path='/setUp' element={<BusinessSetup></BusinessSetup>}/>
        <Route path='/software' element={<Software></Software>}></Route>
        <Route path='/hear' element={<HearAbout></HearAbout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
