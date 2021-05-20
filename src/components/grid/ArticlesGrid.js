import Article from '../article/Article.js';
import './ArticlesGrid.css';

function ArticlesGrid({articles}) {
  return (
    <div className="articles-grid">
      {articles.map((article, i) => <Article key={i} article={article} />)}
    </div>
  );
}

export default ArticlesGrid;
