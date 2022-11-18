import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessSetup from './Components/BusinessSetup';
import HearAbout from './Components/HearAbout';
import Software from './Components/Software';
import TeamSize from './Components/TeamSize';
import SetUpDone from './Components/SetUpDone'
import OutletControlService from './Components/ANU/OutletControlService';
import Servicetype from './Components/ANU/Servicetype';
import Singleservice from './Components/ANU/Singleservice';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<TeamSize/>}> </Route>
        <Route path='/businessSet' element={<BusinessSetup></BusinessSetup>}/>
        <Route path='/software' element={<Software></Software>}></Route>
        <Route path='/hear' element={<HearAbout></HearAbout>}></Route>
        <Route path='/setupDone' element={<SetUpDone></SetUpDone>}></Route>
        <Route path='/ser' element={<OutletControlService/>}></Route>
        <Route path='/servicetype' element={<Servicetype/>}></Route>
        <Route path='/singleser' element={<Singleservice></Singleservice>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
