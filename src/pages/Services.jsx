import './services.css';

const servicesData = [
  {
    id: 1,
    title: "Conception de sites web",
    description:
      "Nous créons des sites web modernes, responsive et adaptés à vos besoins spécifiques, en utilisant les dernières technologies.",
    icon: "fas fa-globe",
  },
  {
    id: 2,
    title: "Référencement SEO",
    description:
      "Optimisez la visibilité de votre site sur les moteurs de recherche grâce à des techniques SEO avancées et un contenu optimisé.",
    icon: "fas fa-rocket",
  },
  {
    id: 3,
    title: "Marketing digital",
    description:
      "Gestion des réseaux sociaux, campagnes publicitaires et stratégies marketing pour accroître votre présence en ligne.",
    icon: "fas fa-chart-line",
  },
];

function Services() {
  return (
    <section className="services-section">
      <h1 className="services-title">Nos Services</h1>
      <div className="services-container">
        {servicesData.map(({ id, title, description, iconClass }) => (
          <article key={id} className="service-card">
            <i className={`service-icon ${iconClass}`} aria-hidden="true"></i>
            <h2 className="service-title">{title}</h2>
            <p className="service-description">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
