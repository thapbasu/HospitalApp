import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Tests from './pages/Tests';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/tests" element={<Tests />} exact />
        <Route path="/*" element={<PageNotFound />} exact />
      </Routes>
    </>
  );
}

export default App;
