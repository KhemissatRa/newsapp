import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './context';

export default function TechNews() {
  
  const { news, loading, error } = useContext(MyContext);
  const filteredNews = news.filter(article => article.source.id && article.content !== null);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message || 'An error occurred'}</p>;
  
  return (
    
    <div className="p-6 max-w-5xl mx-auto">
      <div className='w-full h-40 bg-orange-600 flex justify-center items-center'>
        <h1 className='text-2xl font-bold text-white text-center px-4'>Welcome to a place to share knowledge</h1>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Tech News</h1>
    

      
      <ul className="space-y-4">
         
        
      {filteredNews.length > 0 ? (
          filteredNews.map((article) => (
            <li
              key={article.id}  // Preferably use a unique id
              className="p-4 border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold mb-2 text-orange-600">
                {article.title || 'No title available'}
              </h2>
              <p className="text-gray-700 mb-4">
                {article.description || 'No description available'}
              </p>
              <p>{article.content}</p>

              {/* Ensure article.source and article.source.id are defined */}
              <Link to={`/post/${article.source?.id || 'unknown'}`} className="text-orange-600 hover:underline">
                Read more
              </Link>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No articles with content available</p>
        )}
      </ul>
    </div>
  );
}
