import articles from "../data/articles";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div>
          <h2>articles</h2>
          <div className="list-group">
            {articles.map((article, index) => (
              <a
                href="#"
                key={index}
                className="list-group-item list-group-item-action"
              >
                {article}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
