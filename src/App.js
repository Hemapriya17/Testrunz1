import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SideLayout from './Components/SideLayout';
import MyPage from './Pages/MyPage';
import Procedure from './Pages/Procedure';
import Runz from './Pages/Runz';
import Support from './Pages/Support';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';
import NewProcedure from './Pages/Procedure/Newprocedure';

function App() {
  return (
    <Router>
      <SideLayout>
        <Routes>
          <Route path="/" element={<MyPage />}/>
          <Route path="/procedure" element={<Procedure />}/>
          <Route path="/newprocedure" element={<NewProcedure />}/>
          <Route path="/runz" element={<Runz />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </SideLayout>
    </Router>
  );
}

export default App;
