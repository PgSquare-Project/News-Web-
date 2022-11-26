import React, { useEffect, useState } from 'react';
import Articles from './Pages/Articles';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      console.log(process.env.REACT_APP_NYTIMES_API_KEY);
      const res = await axios.get(` https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=3BMXXRAfz781hnuSmKjvTWfOKGqmU7FO`);
      setArticles(res.data.response.docs);

      setLoading(false);
    };
    getArticles();

  }, []);

  return (
    <div>
      <Articles loading={loading} articles={articles} />
    </div >
  );
};

export default App;