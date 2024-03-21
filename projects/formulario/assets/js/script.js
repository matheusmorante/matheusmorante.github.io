class ValidForm {
    constructor() {
        this.form = document.querySelector('#form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handlerSubmit(e);
        });
    }

    handlerSubmit(e) {
        e.preventDefault();

        const fieldsValid = this.fieldsAreValid();

        console.log('Formulario enviado...')
    }

    fieldsAreValid() {
        const fields = this.form.querySelectorAll('input');

        for (let field of fields) {
            if (!field.value) {
                this.criaErro(field, '0')
            }
        }

        this.cpfFieldIsValid()
    }

    cpfFieldIsValid() {
        const cpfField = this.form.querySelector('#cpf-input')
        if (cpfField.value.length !== 11) return this.criaErro(cpfField, 'O cpf precisa ter 11 números.')
    }

    criaErro(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('text-error');
        field.insertAdjacentElement('afterend', div);
    }

}

const valid = new ValidForm()
