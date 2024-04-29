import * as consts from "./dom-mapper";
import createError from "./valid_form";

export default function searchAddress() {
    let cep = consts.cepInput.value;
    cep = cep.replace(/\D/g, '');

    if (cep.length === 8) {
        const cepErrorTextInput = consts.cepInput.nextElementSibling;

        cepErrorTextInput.innerHTML = '';

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    createError(consts.cepInput, 'CEP não encontrado. Por favor, digite um CEP válido.');
                    return;
                };

                consts.logradouroInput.value = data.logradouro;
                consts.bairroInput.value = data.bairro;
                consts.cityInput.value = data.localidade;
            })
            .catch(error => {
                createError(consts.cepInput, 'Ocorreu um erro ao buscar o endereço. Por favor, tente novamente mais tarde.');
            });
    };
};