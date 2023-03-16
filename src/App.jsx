import { Route, Routes, Link } from 'react-router-dom';
import Todo from './pages/Todo';
import Users from './pages/Users';
import './App.css';

function App() {


  return (
    <div className="App">
      <div>
        <Link to="/todo">Todo</Link>
        <Link to="/users">Users</Link>
      </div>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
