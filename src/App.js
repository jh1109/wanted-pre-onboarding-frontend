import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TodoListPage from './pages/TodoListPage';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/todo" element={<TodoListPage />} />
    </Routes>
  );
}

export default App;
