import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import SignupPage from './Component/wrapper/SignupPage';
import Home from './Component/home/home';
import ProtectedHome from './Component/ProtectedRoutes/protectedHome';
import ProtectedSignup from './Component/ProtectedRoutes/protectedSignup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <ProtectedSignup >
            <SignupPage />
          </ProtectedSignup>
          } />

          <Route path="/home" element={
            <ProtectedHome >
              <Home />
            </ProtectedHome>
          } />
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;