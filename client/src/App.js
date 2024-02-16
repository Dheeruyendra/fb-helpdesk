import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import ConnectPage from './pages/connectPage';
import AgentMessage from './pages/Agent';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connectPage" element={<ConnectPage />} />
          <Route path="/agent" element={<AgentMessage />} />
       </Routes>
    </div>
  );
}

export default App;
