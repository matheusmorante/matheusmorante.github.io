export default function createError(field, text) {
    field.insertAdjacentHTML('afterend', `<p class="error-text">${text}</p>`);
}