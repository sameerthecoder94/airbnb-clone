import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import LocationDetailPage from './pages/LocationDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/hotel-detail/:hotelId'
          element={<LocationDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
