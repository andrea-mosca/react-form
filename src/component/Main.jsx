import articles from "../data/articles";
import { useState } from "react";

export default function Main() {
  const [newArticle, setNewArticle] = useState("");
  const [articlesData, setArticlesData] = useState(articles);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setArticlesData([...articles, newArticle]);
    setNewArticle("");
    console.log(articlesData);
  };
  return (
    <main>
      <div className="container">
        <div>
          <h2>articles</h2>
          <div className="list-group">
            {articlesData.map((article, index) => (
              <a
                href="#"
                key={index}
                className="list-group-item list-group-item-action"
              >
                {article}
              </a>
            ))}
          </div>
          <form onSubmit={handleFormSubmit} className="my-5 d-flex gap-3">
            <input
              type="text"
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value)}
            />
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </main>
  );
}
