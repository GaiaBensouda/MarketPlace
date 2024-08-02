// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import SideBar from './components/SideBar'; 
import TopUsersPage from './pages/TopUsersPage'; // Importation du nouveau composant
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <SideBar /> 
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/top-users" element={<TopUsersPage />} /> {/* Nouvelle route */}
            <Route path="/products" element={<ProductList />} /> {/* Route pour ProductList */}
            {/* Autres routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
