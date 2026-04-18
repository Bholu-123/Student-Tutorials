import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContactRail from './components/common/FloatingContactRail';
import ScrollProgressBar from './components/common/ScrollProgressBar';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';

const App = () => (
  <ThemeProvider>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex min-h-screen flex-col">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
        <FloatingContactRail />
      </div>
    </Router>
  </ThemeProvider>
);

export default App;
