
import './about.css'
import phototeem from '../assets/equipe.jpeg';


function About(){
    return(
        <div>
            <section className="about-section">
                <img className='picteem' src={phototeem} alt="" />
                <div className="container">
                    <h1 className="section-title">Qui sommes-nous ?</h1>

                    <p className="intro">
                    <strong>CréaWeb Solutions</strong> est une agence marocaine spécialisée dans la conception de sites web modernes,
                    le SEO, et le marketing digital. Nous accompagnons nos clients vers une transformation numérique efficace et durable.
                    </p>

                    <div className="mission-vision">
                    <div>
                        <h2>Notre mission</h2>
                        <p>Offrir des solutions digitales performantes adaptées aux besoins de chaque client.</p>
                    </div>
                    <div>
                        <h2>Notre vision</h2>
                        <p>Devenir un leader du digital au Maroc et dans le monde francophone.</p>
                    </div>
                    </div>

                    <div className="values">
                    <h2>Nos valeurs</h2>
                    <ul className="values-list">
                        <li><i className="fas fa-search"></i> Transparence</li>
                        <li><i className="fas fa-rocket"></i> Innovation</li>
                        <li><i className="fas fa-handshake"></i> Engagement</li>
                        <li><i className="fas fa-lightbulb"></i> Créativité</li>
                    </ul>

                    </div>

                    <div className="contact-cta">
                    <h3>Un projet en tête ?</h3>
                    <a href="/contact" className="cta-button">Contactez-nous</a>
                    </div>
                </div>
            </section>


        </div>
    )
}
export default About;