import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
          country: 'us', 
           apiKey: "98ae6bca508a4d2aaaa920b78e02cc8d"
          },
        });
        
        setNews(response.data.articles);
        setLoading(false);
        
      } catch (err) {
        setError(err.message || 'An error occurred while fetching news.');
        setLoading(false);
      }
    };
 console.log(news)
    fetchNews();
  }, []);
  const id=1;
  const title = news[id]
  console.log(title)
  const login = (email) => {
    setUser(email);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <MyContext.Provider value={{title, news, loading, error, user, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
