import LoginPage from './page/LoginPage';
import DashboardPage from './page/DashboardPage';
import SetupPage from './page/SetupPage';
import VinylePage from './page/VinylePage';
import {ApiProvider} from './context/ApiContext';
import './asset/style.css';

import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <ApiProvider>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/dashboard' element={<DashboardPage />}></Route>
          <Route path='/setup' element={<SetupPage />}></Route>
          <Route path='/vinyle' element={<VinylePage />}></Route>
        </Routes>
      </ApiProvider>
    </div>
  );
}

export default App;
