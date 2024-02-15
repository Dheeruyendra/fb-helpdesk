import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import ConnectPage from './pages/fbPage';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fbpage" element={<ConnectPage />} />
       </Routes>
    </div>
  );
}

export default App;
