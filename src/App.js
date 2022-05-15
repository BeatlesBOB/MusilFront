import LoginPage from './page/LoginPage';
import DashboardPage from './page/DashboardPage';

import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/dashboard' element={<DashboardPage />}></Route>
        <Route path='/settings' element={<LoginPage />}></Route>
        <Route path='/qr-code' element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
