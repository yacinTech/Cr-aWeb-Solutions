// src/pages/BlogPost.jsx
import { useParams } from 'react-router-dom';
import articles from '../data/articles';

function BlogPost() {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Article non trouvé.</div>;
  }

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
      <img src={article.image} alt={article.title} style={{ width: "100%", borderRadius: "10px" }} />
      <h1 style={{ marginTop: "1rem", fontSize: "2rem", color: "#333" }}>{article.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: "1.7", color: "#555" }}
      />
    </div>
  );
}

export default BlogPost;
