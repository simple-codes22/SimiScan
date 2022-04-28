import './CSS/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Network from './Pages/network';
import Main from './Pages/main';
import Transaction from './Pages/transaction';
import Block from './Pages/block';
import Address from './Pages/address';

function App() {
  return (
    <div className="App">
      <Router>
        {/* React router responsible for page routing */}
        
        <Routes>
          <Route index path='/' element={<Network />} /> {/* The index/default page */}
          <Route path='*' element={<Network />} />
          <Route path='/:network' element={<Main />} />
          <Route path='/:network/tx/:hash' element={<Transaction />} />
          <Route path='/:network/address/:hash' element={<Address />} />
          <Route path='/:network/block/:hash' element={<Block />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
