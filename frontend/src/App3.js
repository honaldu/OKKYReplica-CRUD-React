import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [categories, setCategories] = useState(null);
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responseCategory = await axios.get("/categories");
        const responseArticles = await axios.get("/articles");
        setCategories(responseCategory.data);
        setArticles(responseArticles.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default App;
