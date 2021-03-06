import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 300
        }
    }

    return (
        <main>
            <Mouse />
            <motion.div exit="out" animate="in" initial="out" variants={pageTransition} transition={{ duration: 0.4 }} className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>52 boulevard heurteloup</p>
                            <p>37000 Tours</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0648484848" className="hover">
                                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={ () => alert("Téléphone copié !") }>06 48 48 48 48</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="test@mail.com" className="hover">
                                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={ () => alert("Email copié !") }>test@mail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Grégoire - 2022</p>
                    </div>
                </div>
                <Buttons left={"/projet-4"} />
            </motion.div>
        </main>
    );
};

export default Contact;
