import { createItemsText } from './utilities';

export default function sendDeliveryOrder(cep, logradouro, addressNumber, complement, reference, bairro,
    city, placeType, firstName, lastName, phoneNumber, observations) {
    const message =
    `*Entrega para* ${firstName} ${lastName}
    \n*AVISO:* ${observations}
    \n*Itens:* ${createItemsText()}
    \n*Tel/Cel:* ${phoneNumber}
    \n*Endereço:* ${logradouro},  ${addressNumber}, ${complement}, ${bairro}, ${city} - ${cep}
    \n*Referencia:* ${reference} - ${placeType}`

    const messageURL = encodeURIComponent(message);

    window.open(`https://api.whatsapp.com/send?phone=&text=${messageURL}`,
        '_blank');
}


