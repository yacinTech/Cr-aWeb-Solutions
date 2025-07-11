import React from "react";
import './testimonials.css';
import photo1 from '../assets/temoiniagespic/photo1.jpg';
import photo2 from '../assets/temoiniagespic/photo2.jpeg';
import photo3 from '../assets/temoiniagespic/photo3.webp';

const testimonials = [
  {
    name: "Sophie Dupont",
    title: "Fondatrice - Boutique Naturelle",
    image: photo1,
    content: "Excellent service ! Mon site est rapide, moderne et parfaitement adapté à mes besoins. Je recommande vivement !"
  },
  {
    name: "Karim El Mansouri",
    title: "Consultant Indépendant",
    image: photo2,
    content: "Une équipe à l'écoute, professionnelle et créative. Mon site a gagné en visibilité grâce au SEO."
  },
  {
    name: "Agence CréaPro",
    title: "Client B2B",
    image: photo3,
    content: "Collaboration fluide et résultats au top. Une vraie valeur ajoutée pour nos projets digitaux."
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Ils nous font confiance</h2>
      <div className="testimonials-list">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <h3>{t.name}</h3>
            <p className="testimonial-title">{t.title}</p>
            <p className="testimonial-content">“{t.content}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
