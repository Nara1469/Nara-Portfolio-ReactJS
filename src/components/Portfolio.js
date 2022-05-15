import React, { useState } from 'react';
import Header from './Header';
import NavTabs from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // <div className="main-container">
      <div className="container">
        <Header />
        {/* // TODO: Add a comment describing what we are passing as props */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* // TODO: Add a comment explaining what is happening on the following line */}
        {renderPage()}
        <Footer />
      </div>
    // </div>
  ); 
}
