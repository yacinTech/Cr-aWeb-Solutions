// src/data/articles.js
import article1 from '../assets/Articles/article1.jpg';
import article2 from '../assets/Articles/article2.jpg';
import article3 from '../assets/Articles/article3.jpg';
import article4 from '../assets/Articles/article4.webp';
import article5 from '../assets/Articles/article5.png';
import article6 from '../assets/Articles/article6.jpeg';

const articles = [
  {
    id: 1,
    title: "Comment réussir son site web",
    summary: "Découvrez les meilleures pratiques pour créer un site web performant et attractif.",
    image: article1,
    url: "/blog/article-1",
    content: `
      <p>Créer un site web réussi nécessite une planification rigoureuse et une attention particulière aux détails. Il est important de définir clairement les objectifs du site, qu'il s'agisse de vendre des produits, partager des informations ou promouvoir une marque.</p>
      <p>Un design clair et moderne qui reflète votre identité visuelle attire l’attention des visiteurs et facilite leur navigation. N'oubliez pas que la performance technique est cruciale : un site rapide et responsive retient les utilisateurs et améliore votre référencement.</p>
      <p>Le contenu doit être pertinent et structuré avec des titres, images et paragraphes bien organisés. Enfin, intégrez des appels à l'action clairs pour guider vos visiteurs vers les étapes souhaitées.</p>
    `
  },
  {
    id: 2,
    title: "Le référencement SEO expliqué",
    summary: "Apprenez les bases du SEO pour améliorer la visibilité de votre site sur Google.",
    image: article2,
    url: "/blog/article-2",
    content: `
      <p>Le référencement naturel (SEO) est essentiel pour augmenter la visibilité de votre site web sur les moteurs de recherche. Il repose sur trois piliers : le contenu, la technique et les liens.</p>
      <p>Le contenu doit être original, riche en mots-clés pertinents, et répondre aux attentes des internautes. La technique inclut la vitesse de chargement, la structure du site et l’optimisation mobile.</p>
      <p>Enfin, les liens entrants (backlinks) provenant de sites de qualité renforcent l'autorité de votre domaine et améliorent votre positionnement.</p>
    `
  },
  {
    id: 3,
    title: "Marketing digital pour débutants",
    summary: "Une introduction complète aux stratégies digitales pour booster votre entreprise.",
    image: article3,
    url: "/blog/article-3",
    content: `
      <p>Le marketing digital regroupe plusieurs techniques pour promouvoir une entreprise en ligne. Il inclut le référencement, la publicité payante, le marketing de contenu et les réseaux sociaux.</p>
      <p>Pour débuter, définissez votre audience cible et créez des contenus adaptés à leurs besoins. Utilisez les réseaux sociaux pour interagir et fidéliser votre communauté.</p>
      <p>Mesurez les résultats grâce à des outils analytiques pour ajuster vos campagnes et maximiser votre retour sur investissement.</p>
    `
  },
  {
    id: 4,
    title: "L'importance du design responsive",
    summary: "Pourquoi un site adaptatif est essentiel pour l’expérience utilisateur.",
    image: article4,
    url: "/blog/article-4",
    content: `
      <p>Le design responsive garantit que votre site s'affiche parfaitement sur tous types d'écrans, du smartphone à l'ordinateur de bureau. Cela améliore l'expérience utilisateur et réduit le taux de rebond.</p>
      <p>Un site adaptatif utilise des grilles flexibles, des images ajustables et des médias queries CSS pour s'adapter automatiquement à la taille de l'écran.</p>
      <p>Google privilégie également les sites responsive dans ses résultats, ce qui en fait un élément clé de votre stratégie digitale.</p>
    `
  },
  {
    id: 5,
    title: "Sécurité web : bonnes pratiques",
    summary: "Protégez votre site contre les attaques avec ces conseils essentiels.",
    image: article5,
    url: "/blog/article-5",
    content: `
      <p>La sécurité web est un enjeu majeur pour protéger vos données et celles de vos utilisateurs. Utilisez des certificats SSL pour chiffrer les échanges et choisissez des mots de passe forts.</p>
      <p>Mettez régulièrement à jour vos logiciels et plugins pour éviter les failles de sécurité. Sauvegardez vos données fréquemment pour pouvoir restaurer votre site en cas d’attaque.</p>
      <p>Enfin, limitez les accès administrateurs et surveillez les activités suspectes pour réagir rapidement aux menaces.</p>
    `
  },
  {
    id: 6,
    title: "Tendances du marketing digital en 2025",
    summary: "Stratégies innovantes pour transformer votre présence en ligne cette année.",
    image: article6,
    url: "/blog/article-6",
    content: `
      <p>Le marketing digital évolue rapidement avec l'apparition de nouvelles technologies et comportements consommateurs. En 2025, l'IA, la personnalisation et le marketing vidéo seront au cœur des stratégies gagnantes.</p>
      <p>L'automatisation des campagnes permet de cibler plus précisément les prospects et d'améliorer le taux de conversion. Les vidéos courtes et interactives captivent davantage l'attention.</p>
      <p>Enfin, les réseaux sociaux continueront d'être des plateformes majeures pour créer de l'engagement et fidéliser les clients.</p>
    `
  }
];

export default articles;



