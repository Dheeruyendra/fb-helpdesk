import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import ConnectPage from './pages/connectPage';
import DeleteDisconnect from './pages/DeleteDisconnect';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connectPage" element={<ConnectPage />} />
          <Route path="/deleteDisconnect" element={<DeleteDisconnect />} />
       </Routes>
    </div>
  );
}

export default App;
