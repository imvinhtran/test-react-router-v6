import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <nav>
        <Link to='/home'>Home</Link> | {""}
        <Link to='teams'>Teams</Link>
      </nav>
    </div>
  );
}

export default App;
