import React, {  } from 'react';
import { Contacto } from '../../models/contacto';
import ContactoProps from '../pure/contacto_props';


const ContactoCompleto = () => {

    const defaultContacto = new Contacto('sergio','vasquez' , "sergio.d.v", true );

     return (
            <div>
            
               <ContactoProps Contacto={defaultContacto}></ContactoProps>
            </div>
        );
    
}

export default ContactoCompleto;
