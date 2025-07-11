import './blog.css';
import articles from '../data/articles'; 
import { Link } from 'react-router-dom';

function BlogList() {
  return (
    <section className="blog-list">
      <h2>Notre Blog</h2>
      <div className="articles-container">
        {articles.map(({ id, title, summary, image, url }) => (
          <article key={id} className="blog-article">
            <img src={image} alt={title} className="article-image" />
            <h3 className="article-title">{title}</h3>
            <p className="article-summary">{summary}</p>
            <Link to={`/blog/${id}`} className="read-more">Lire la suite</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
