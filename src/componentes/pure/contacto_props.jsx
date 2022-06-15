import React, {  } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto';


const ContactoProps = ({Contacto}) => {
    
        return (
            <div>
            <h2>
                Nombre: {Contacto.Name}
            </h2>
            <h3>
                Apellido: {Contacto.Apellido}
            </h3>
            <h4>
                Email: { Contacto.Email }
            </h4>
            <h5>
                 contacto: { Contacto.Conexion ? "en linea": "no disponible" }
            </h5>
        </div>
        );
    
};

ContactoProps.propTypes = {
    task: PropTypes.instanceOf(Contacto)
};


export default ContactoProps;
