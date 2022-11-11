import { Route, Routes } from 'react-router-dom';
import './App.css';
import TeamSize from './Components/TeamSize';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<TeamSize/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
