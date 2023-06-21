import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TodoListPage from './pages/TodoListPage';
import Main from './pages/Main';
import AuthContextProvider from './store/AuthProvider';

function App() {
  const token = localStorage.getItem('access_token');
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signup"
          element={token ? <Navigate to="/todo" /> : <RegisterPage />}
        />
        <Route
          path="/signin"
          element={token ? <Navigate to="/todo" /> : <LoginPage />}
        />
        <Route
          path="/todo"
          element={token ? <TodoListPage /> : <Navigate to="/signin" />}
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
