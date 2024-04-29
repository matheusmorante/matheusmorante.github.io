import * as consts from "./dom-mapper";

export function addItem(count) {
    const content =
        `<tr class="item-rows">
            <td><input id="item-description-input-${count}" class="item-description-inputs form-control" 
                    placeholder="Insira a descrição do item"></td>
            <td><input type="number" value="1" id="amount-input-${count}" class="item-amount-inputs form-control"
                    placeholder="Insira a quantidade"></td>
            <td><input type="number" id="price-input-${count}" class="item-price-inputs form-control"
                    placeholder="Insira o preço"></td>
            <td><input type="number" id="discount-input-${count}" class="item-discount-inputs form-control"  
                    placeholder="Insira o desconto"></td>
            <td id="final-price-td-${count}" class="item-final-price-tds"></td>
            <td><i class="remove-row-btns bi bi-dash-circle"></i></td>
         </tr>`;

    consts.itemsSummaryHeader.insertAdjacentHTML('beforebegin', content);
}

export function itemsSummary() {
    const itemAmountInputs = document.querySelectorAll('.item-amount-inputs');
    const itemFinalPriceTds = document.querySelectorAll('.item-final-price-tds');

    consts.totalAmountTd.innerText = sumFields(itemAmountInputs);
    consts.totalFinalPriceTd.innerText = sumFields(itemFinalPriceTds);

}

export function sumFields(fields) {
    const fieldsArray = Array.from(fields);
    const total = fieldsArray.reduce((total, field) => {
        if (field.tagName.toLowerCase() === 'input') {
            const value = parseFloat(field.value);
            return isNaN(value) ? total : total + value;
        }
        if (field.tagName.toLowerCase() === 'td') {
            const value = parseFloat(field.innerText);
            return isNaN(value) ? total : total + value;
        }
    }, 0);

    return total;
}

export function finalPrice(price, amount, discount) {
    return `${(price * amount) - (discount * amount)}`;
}


