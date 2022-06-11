import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgriMartHome from './pages/AgriMartHome/AgriMartHome';



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<AgriMartHome />} />
      </Routes>

    </Router>
  );
}

export default App
