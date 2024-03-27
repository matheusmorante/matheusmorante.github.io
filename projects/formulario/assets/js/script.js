class ValidCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfClean', {
            configurable: false,
            writable: false,
            enumerable: true,
            value: cpf.replace(/\D+/g, '')
        })
    }

    IsSequence() {
        return this.cpfClean.charAt(0).repeat(11) === this.cpfClean;;
    }

    createCpf() {
        const cpfLessDigits = this.cpfClean.slice(0, -2);
        const digit1 = ValidCPF.createDigit(cpfLessDigits);
        const digit2 = ValidCPF.createDigit(cpfLessDigits + digit1);
        this.newCPF = cpfLessDigits + digit1 + digit2;
    }

    static createDigit(cpfLessDigits) {
        let total = 0;
        let reverse = cpfLessDigits.length + 1;

        for (let stringNum of cpfLessDigits) {
            total += reverse * Number(stringNum);
            reverse--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    valid() {
        if (!this.cpfClean) return false;
        if (typeof this.cpfClean !== 'string') return false;
        if (this.cpfClean.length !== 11) return false;
        if (this.IsSequence()) return false;

        this.createCpf();

        return this.newCPF === this.cpfClean;
    }
}

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
        const passwordsValid = this.passwordsAreValid();

        if (fieldsValid && passwordsValid) {
            alert('Formulario enviado.');
            this.form.submit();
        }
    }

    fieldsAreValid() {
        let valid = true;
        const fields = this.form.querySelectorAll('input');

        for (let textError of this.form.querySelectorAll('.text-error')) {
            textError.remove();
        };

        for (let field of fields) {
            const label = field.previousElementSibling.innerText;

            if (!field.value) {
                this.createError(field, `O campo "${label}" não pode estar vazio.`);
            }

            if (field.id === 'cpf-input') {
                if (!this.cpfIsValid(field)) valid = false;
            }
        }

        return valid;
    }

    cpfIsValid(field) {
        const cpf = new ValidCPF(field.value);

        if (!cpf.valid()) {
            this.createError(field, 'CPF inválido');
            return false;
        }

        return true
    }

    passwordsAreValid() {
        let valid = true;
        const passwordField = this.form.querySelector('#password-input');
        const RepeatPasswordField = this.form.querySelector('#repeat-password-input');

        if (passwordField.value !== RepeatPasswordField.value) {
            valid = false;
            this.createError(passwordField, 'Os campos senha e repetir senha precisam ser iguais');
            this.createError(RepeatPasswordField, 'Os campos senha e repetir senha precisam ser iguais');
        }

        if (passwordField.value.length < 6 || passwordField.value.length > 12) {
            valid = false;
            this.createError(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
        }

        return valid;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('text-error');
        field.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidForm();


