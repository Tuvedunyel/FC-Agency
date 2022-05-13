import { FormEvent, useRef } from 'react';
// import emailjs, { init } from '@emailjs/browser';

// init( import.meta.env.VITE_API_KEY );

const ContactForm = () => {
    const form = useRef<HTMLFormElement>( null );

    const sendEmail = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const formMess = document.querySelector( ".formMessage" );
        formMess!.innerHTML = "<p class='success'>Message envoyé !</p>";
        // emailjs
        //     .sendForm(
        //         "service_y4q20km",
        //         "template_5ni7fmu",
        //         form.current,
        //         import.meta.env.VITE_API_KEY
        //     )
        //     .then(
        //         ( res: { text: string } ) => {
        //             console.log( res.text );
        //             form.current?.reset();
        //             formMess!.innerHTML = "<p class='success'>Message envoyé !</p>";
        //
        //             setTimeout( () => {
        //                 formMess!.innerHTML = "";
        //             }, 2000 );
        //         },
        //         ( err: { text: string } ) => {
        //             console.log( err.text );
        //             formMess!.innerHTML =
        //                 "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";
        //
        //             setTimeout( () => {
        //                 formMess!.innerHTML = "";
        //             }, 2000 );
        //         }
        //     );
    };

    return (
        <div className="form-container">
            <h2>contactez-nous</h2>
            <form ref={ form } onSubmit={ sendEmail } className="form-content">
                <label>Nom</label>
                <input type="text" name="name" required autoComplete="off" id="name"/>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    id="email"
                />
                <label>Message</label>
                <textarea name="message" id="mess"/>
                <input type="submit" value="Envoyer" className="hover button"/>
            </form>
            <div className="formMessage"></div>
        </div>
    );
};

export default ContactForm;
