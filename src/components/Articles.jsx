import React, { useState, useEffect } from "react";
import Card from "./Card/Card";

const requestOptions = {
  method: "POST",
  body: JSON.stringify({
    // Use stringify for the query
    query: `{
           publication(host: "stylades.hashnode.dev") {
           posts(first: 4) {
             edges {
               node {
                  id
                  title               
                  url
                  brief             
               }
             }
           }
         } 
       }`,
  }),
  headers: { "content-type": "application/json" },
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gql.hashnode.com",
          requestOptions
        );
        const apiData = await response.json();
        const fetchedPosts = apiData.data.publication.posts.edges;

        setArticles(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [loading]);

  return (
    <section className="c-space my-20">
      <h3 className="head-text">Articles Written</h3>
      <p className="grid-subtext">
        Check out some technical blogs that I've written.
      </p>
      <div className="article-container">
        {loading && <p>Loading...</p>}
        {!loading && articles.length === 0 && <p>No articles found.</p>}
        {articles.map((article) => (
          <Card key={article.node.id} {...article.node} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
