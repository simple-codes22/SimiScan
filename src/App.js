import './CSS/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Network from './Pages/network';

function App() {
  return (
    <div className="App">
      <Router>
        {/* React router responsible for page routing */}
        
        <Routes>
          <Route index path='/' element={<Network />} /> {/* The index/default page */}
          <Route path='*' element={<Network />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
