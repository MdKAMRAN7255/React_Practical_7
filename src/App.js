import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import SignupPage from './Component/UI/SignUpPageContainer/SignupPage';
import Home from './Component/UI/home/home';
import Protected from './Component/ProtectedRoutes/protected';
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
            <Protected >
              <Home />
            </Protected>
          } />
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;