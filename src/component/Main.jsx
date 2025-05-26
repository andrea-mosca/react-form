import articles from "../data/articles";
import { useState } from "react";

export default function Main() {
  const [newArticle, setNewArticle] = useState(""); //
  const [articlesData, setArticlesData] = useState(articles);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setArticlesData([...articlesData, newArticle]);
    setNewArticle("");
  };

  const removeArticle = (index) => {
    const updateArticle = articlesData.filter((article, indexToRemove) => {
      return indexToRemove !== index;
    });
    setArticlesData(updateArticle);
  };

  return (
    <main>
      <div className="container">
        <div>
          <h2>articles</h2>
          <div className="list-group d-flex">
            {articlesData.map((articleData, index) => (
              <div
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <a href="#">{articleData}</a>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removeArticle(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <h2 className="mt-5">Add new article</h2>
          <form onSubmit={handleFormSubmit} className="d-flex gap-3">
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
