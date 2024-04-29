import * as consts from "./dom-mapper";
import { sumFields } from "./items";

export function addPaymentMethod(count) {
    const html =
        `<tr class="payment-rows">
            <td>
                <select id="payment-method-select-${count}" class="payment-method-selects form-select" aria-label="Large select example">
                    <option selected>Selecione</option>
                    <option value="PIX">PIX</option>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de Débito">Cartão de Débito</option>
                    <optgroup label="Cartão de Crédito">
                        <option value="Credito 1x">1x</option>
                        <option value="Credito 2x">2x</option>
                        <option value="Credito 3x">3x</option>
                        <option value="Credito 4x">4x</option>
                        <option value="Credito 5x">5x</option>
                        <option value="Credito 6x">6x</option>
                        <option value="Credito 7x">7x</option>
                        <option value="Credito 8x">8x</option>
                        <option value="Credito 9x">9x</option>
                        <option value="Credito 10x">10x</option>
                    </optgroup>
                    <optgroup label="Boleto">
                        <option value="Boleto 1x">1x</option>
                        <option value="Boleto 2x">2x</option>
                        <option value="Boleto 3x">3x</option>
                        <option value="Boleto 4x">4x</option>
                        <option value="Boleto 5x">5x</option>
                        <option value="Boleto 6x">6x</option>
                        <option value="Boleto 7x">7x</option>
                        <option value="Boleto 8x">8x</option>
                        <option value="Boleto 9x">9x</option>
                        <option value="Boleto 10x">10x</option>
                    </optgroup>
                </select>
            </td>
            <td>
            <input type="number" id="payment-value-input-${count}" class="payment-value-inputs form-control"
                placeholder="Insira o valor">
            </td>
            <td>
                <select id="payment-status-select-${count}" class="payment-status-selects form-select" aria-label="Large select example">
                    <option value="Pago" selected>Pago</option>
                    <option value="Pendente">Pendente</option>
                </select>         
            </td>
            <td><i class="remove-row-btns bi bi-dash-circle"></i></td>
        </tr>`;

    consts.remainingValueTr.insertAdjacentHTML('beforebegin', html);

}

export function remainingValue() {
    const totalFinalPrice = consts.totalFinalPriceTd.innerText;
    const paymentValueInputs = document.querySelectorAll(".payment-value-inputs");
    const totalPaymentValue = sumFields(paymentValueInputs);

    consts.remainingValueTd.innerText = totalFinalPrice - totalPaymentValue
}

