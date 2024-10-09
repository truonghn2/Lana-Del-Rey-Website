import { useState } from 'react'

import './App.css'
import Header from './Header.jsx';
import articles from "../articles.js";
import Card from "./Card.jsx";

function App() {

  return (
    <>
        <div>
          <Header />

          <div className="card-container">
          {/*map function to iterate over the articles array*/}
          {articles.map((article) => (
            <Card 
              key={article.id} 
              image={article.image} 
              title={article.title}
              date ={article.date}
              description={article.description}
            />
          ))}
        </div>

        </div>

        
        
    </>
  )
}

export default App
