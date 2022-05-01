import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/Homepage';
import LocationDetailPage from './pages/LocationDetailPage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HotelsPage from './pages/HotelsPage';
import BookingsPage from './pages/BookingsPage';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/hotel-detail/:hotelId'
          element={<LocationDetailPage />}
        />
        <Route path='/hotels' element={<HotelsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/bookings' element={<BookingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
