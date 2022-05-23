import LoginPage from './page/LoginPage';
import DashboardPage from './page/DashboardPage';
import SetupPage from './page/SetupPage';
import VinylePage from './page/VinylePage';

import {SocketContext, socket} from './context/socket';

import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/dashboard' element={<DashboardPage />}></Route>
          <Route path='/setup' element={<SetupPage />}></Route>
          <Route path='/vinyle' element={<VinylePage />}></Route>
        </Routes>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
