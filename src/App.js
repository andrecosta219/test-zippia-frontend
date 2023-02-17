import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Jobs from './pages/Jobs';
import './App.css';

import Header from './components/general/Header';

//I re-routed all possible routes to /test/jobs

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/test/jobs' element={<Jobs />} />
        <Route path='*' element={<Navigate to='/test/jobs' />} />
      </Routes>
    </div>
  );
}

export default App;
