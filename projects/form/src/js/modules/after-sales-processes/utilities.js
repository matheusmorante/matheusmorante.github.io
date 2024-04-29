import * as consts from "../dom-mapper";

export function createItemsText() {
    const itemRows = document.querySelectorAll('.item-rows');
    let items = ``;

    for (let i = 1; i < itemRows.length + 1; i++) {
        const itemDescription = document.querySelector('#item-description-input-' + i).value;
        const amount = document.querySelector('#amount-input-' + i).value;
        const item = `${itemDescription} (${amount}un), `;

        items += item;
    };

    return items;
};

export function createItemRows() {
    const itemRows = document.querySelectorAll('.item-rows');
    let rows = `
        <tr>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Preço final</th>
        </tr>
    `;

    for (let i = 1; i < itemRows.length + 1; i++) {
        const itemDescription = document.querySelector('#item-description-input-' + i).value;
        const amount = document.querySelector('#amount-input-' + i).value;
        const finalPrice = document.querySelector('#final-price-td-' + i).innerText;
        const row = `
            <tr>
                <td>${itemDescription.toUpperCase()}</td>
                <td class="amount-tds">${amount}</td>
                <td>
                    <div class="value-containers">
                        <div>R$</div>
                        <div>${finalPrice}</div>
                    </div>
                </td>
            </tr>
        `;

        rows += row;
    };

    return rows;
};

export function createItemsSummaryRow() {
    const totalAmount = consts.totalAmountTd.innerText;
    const totalfinalPrice = consts.totalFinalPriceTd.innerText
    const row = `
        <tr>
            <th style="background-color: white; border: none">
            <th>Quantidade total</th>
            <th>Preço final total</th>
        </tr>
        <tr>
            <td style="background-color: white; border: none">
            <td class="amount-tds">
                ${totalAmount}
            </td>
            <td>
                <div>
                    <div class="value-containers">
                        <div>R$</div> 
                        <div">${totalfinalPrice}</div>
                    <div>
                </div>
            </td>
        </tr>
    `;

    return row;
}

export function createPaymentRows() {
    const paymentRows = document.querySelectorAll('.payment-rows');
    let rows = `
        <tr>
            <th>Método</th>
            <th>Valor</th>
            <th class="payment-status-column">Status</th>
        </tr>
    `;
    for (let i = 1; i < paymentRows.length + 1; i++) {
        const paymentMethod = document.querySelector('#payment-method-select-' + i).value;
        const paymentValue = document.querySelector('#payment-value-input-' + i).value;
        const paymentStatus = document.querySelector('#payment-status-select-' + i).value

        const row = `
            <tr>
                <td>${paymentMethod}</td>
                <td>
                    <div class="value-containers"> 
                        <div>R$</div>
                        <div>${paymentValue}</div>
                    </div>
                </td>
                <td class="payment-status-column">
                    ${paymentStatus}
                </td>
            </tr>
        `;

        rows += row;
    };

    return rows;
};

