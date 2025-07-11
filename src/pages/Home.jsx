
import Accpic from '../assets/hero-image.svg'; 
import './home.css'
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactForm";
import articles from '../data/articles';
import { Link } from 'react-router-dom';


function Home(){
    const randomArticles = [...articles].sort(() => 0.5 - Math.random()).slice(0, 3);
    return(
        <div>
            <img className="hero-image" src={Accpic} alt="Accueil" />
            <p className="welcome-message">Bienvenue chez <strong>CréaWeb Solutions</strong>, votre partenaire digital pour créer des sites web professionnels adaptés à vos besoins.</p>
            <section className="services-section">
                <h2 className="services-title">Nos Services</h2>
                <p className="services-description">
                    Une agence digitale moderne spécialisée dans :
                </p>
                <ul className="services-list">
                    <li>Conception de sites web modernes</li>
                    <li>Optimisation SEO pour une meilleure visibilité</li>
                    <li>Gestion et animation des réseaux sociaux</li>
                    <li>Campagnes publicitaires ciblées</li>
                </ul>
            </section>
            <section className="random-articles">
                <h2 className="section-title">Articles à la une</h2>
                <div className="articles-container">
                    {randomArticles.map(({ id, title, summary, image, url }) => (
                    <article key={id} className="blog-article">
                        <img src={image} alt={title} className="article-image" />
                        <h3 className="article-title">{title}</h3>
                        <p className="article-summary">{summary}</p>
                        <Link to={`/blog/${id}`} className="read-more">Lire la suite</Link>
                        
                    </article>
                    ))}
                </div>
                  <div className="see-more-container">
                        <Link to="/blog" className="see-more-button">Voir tous les articles</Link>
                </div>
            </section>
            
            <Testimonials/>
            <ContactCTA/>
            


        </div>


  


    )
}
export default Home;