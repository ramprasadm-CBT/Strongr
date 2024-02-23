import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ClubListScreen from './screens/ClubListScreen'
import LoginScreen from './screens/LoginScreen'
import ClubDetailScreen from './screens/ClubDetailScreen'
import BookingScreen from './screens/BookingScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import RegisterScreen from './screens/RegisterScreen'



function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/clubs/" element={<ClubListScreen />} />
            <Route path="/login/" element={<LoginScreen />} />
            <Route path="/signup/" element={<RegisterScreen />} />
            <Route path="/club/:id" element={<ClubDetailScreen />} />
            <Route path="/booking/:id" element={<BookingScreen />} />
            <Route path="/checkout/" element={<CheckoutScreen />} />

          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
