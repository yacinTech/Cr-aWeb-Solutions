
import './contact.css'
import ContactForm from '../components/ContactForm'
function Contact(){
    return(
        <div>
            <section className="contact-invitation">
                <h2>Vous avez un projet ? Parlons-en !</h2>
                <p>
                    Notre équipe est prête à donner vie à vos idées. Remplissez le formulaire ci-dessous et
                    bénéficiez d’une consultation gratuite et personnalisée. Ensemble, construisons votre succès digital.
                </p>
            </section>

            <ContactForm/>


        </div>
    )
}
export default Contact;