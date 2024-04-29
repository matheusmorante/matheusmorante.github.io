import * as consts from "./modules/dom-mapper";
import printReceipt from "./modules/after-sales-processes/receipt";
import printDeliveryOrder  from "./modules/after-sales-processes/delivery-order";
import sendDeliveryOrder from "./modules/after-sales-processes/send-delivery-order";
import { addPaymentMethod, remainingValue } from "./modules/payment";
import { addItem, itemsSummary, finalPrice } from "./modules/items";
import searchAddress from "./modules/search_address";
import '../../src/css/main.css';


let countItemId = 2;
let countPaymentMethodId = 2;

function SalesFormController() {
    this.init = () => {
        this.handleEvent();
    }

    this.handleEvent = () => {
        document.addEventListener('input', e => {
            const targetEl = e.target;
            const tr = targetEl.closest('tr');

            if (targetEl.classList.contains('item-price-inputs') ||
                targetEl.classList.contains('item-discount-inputs') ||
                targetEl.classList.contains('item-amount-inputs')
            ) {
                const priceInput = tr.querySelector('.item-price-inputs');
                const amountInput = tr.querySelector('.item-amount-inputs');
                const discountInput = tr.querySelector('.item-discount-inputs');
                const finalPriceTd = tr.querySelector('.item-final-price-tds');

                finalPriceTd.innerText = finalPrice(priceInput.value, amountInput.value, discountInput.value);
                itemsSummary();
                remainingValue();
            }

            if (targetEl.classList.contains('payment-value-inputs')) {
                remainingValue();
            }

            if (targetEl.id === 'cep-input') {
                searchAddress();
            }
        })

        document.addEventListener('click', e => {
            e.preventDefault()
            const targetEl = e.target;
            const cep = consts.cepInput.value;
            const logradouro = consts.logradouroInput.value;
            const addressNumber = consts.addressNumberInput.value;
            const complement = consts.complementInput.value;
            const reference = consts.referenceInput.value;
            const bairro = consts.bairroInput.value;
            const city = consts.cityInput.value;
            const placeType = consts.placeTypeInput.value;
            const firstName = consts.firstNameInput.value;
            const lastName = consts.lastNameInput.value;
            const phoneNumber = consts.phoneNumberInput.value;
            const phoneNumber2 = consts.phoneNumber2Input.value;
            const observations = consts.observationsInput.value;

            if (targetEl.id === 'add-item-btn') {
                addItem(countItemId++);
            }

            if (targetEl.id === 'add-payment-method-btn') {
                addPaymentMethod(countPaymentMethodId++);
            }

            if (targetEl.classList.contains('remove-row-btns')) {
                const tr = targetEl.closest('tr');

                tr.remove();
            }

            if (targetEl.id === 'print-receipt-btn') {
                printReceipt(cep, logradouro, addressNumber, complement, bairro,
                city, firstName, lastName, phoneNumber);
            }

            if (targetEl.id === 'print-order-delivery-btn') {
                printDeliveryOrder(cep, logradouro, addressNumber, complement, reference,
                    bairro, city, placeType, firstName, lastName, phoneNumber, observations);
            }

            if (targetEl.id === 'send-order-delivery-btn') {
                sendDeliveryOrder(cep, logradouro, addressNumber, complement, reference,
                    bairro, city, placeType, firstName, lastName, phoneNumber, 
                    observations);
            }
        });
    }
}

const form = new SalesFormController;
form.init();
