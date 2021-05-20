import './Article.css';

function Article({article}) {
    return (
        <div className="article-container">
            <h3>{article.title}</h3>
            <h6>{new Date(article.created_at).toDateString()}</h6>
            <p>{article.content}</p>
        </div>
    );
}

export default Article;
