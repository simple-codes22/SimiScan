import './CSS/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Network from './Pages/network';
import Main from './Pages/main';
import Transaction from './Pages/transaction-page';
import Block from './Pages/block-page';
import Address from './Pages/address-page';
import Token from './Pages/token';
import { NotFoundResult, WrongPage } from './Pages/errors';

function App() {
  return (
    <div className="App">
      <Router>
        {/* React router responsible for page routing */}
        
        <Routes>
          <Route index path='/' element={<Network />} /> {/* The index/default page */}
          <Route path='/:network' element={<Main />} />
          <Route path='/:network/txn/:hash' element={<Transaction />} />
          <Route path='/:network/address/:hash' element={<Address />} />
          <Route path='/:network/block/:number' element={<Block />} />
          <Route path='/:network/token/:hash' element={<Token />} />
          <Route path='/:network/error' element={<NotFoundResult />} />
          <Route path='*' element={<WrongPage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
