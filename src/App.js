import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TodoListPage from './pages/TodoListPage';
import Main from './pages/Main';
import AuthContextProvider from './store/AuthProvider';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/todo" element={<TodoListPage />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
