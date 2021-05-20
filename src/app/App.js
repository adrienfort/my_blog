import React, { useState } from 'react';
import './App.css';
import Navbar from '../components/navbar/Navbar.js'
import ArticlesGrid from '../components/grid/ArticlesGrid.js'
import Footer from '../components/footer/Footer.js'

function App({start_articles}) {
  const [articles, setArticles] = useState(start_articles)

  return (
    <div className="app">
      <div className="app-header">
        <Navbar articles={articles} setArticles={setArticles}/>
      </div>
       <div className="app-content">
         <ArticlesGrid articles={articles} />
       </div>
      <div className="app-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
