/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/after-sales-processes/delivery-order.js":
/*!****************************************************************!*\
  !*** ./src/js/modules/after-sales-processes/delivery-order.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printDeliveryOrder)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/modules/after-sales-processes/utilities.js");

function printDeliveryOrder(cep, logradouro, addressNumber, complement, reference, bairro, city, placeType, firstName, lastName, phoneNumber, observations) {
  var deliveryOrderHTML = "\n       <!DOCTYPE html>\n       <html lang=\"pt-br\">\n\n       <head>\n           <meta charset=\"UTF-8\">\n           <title>Pedido da ".concat(firstName, "</title\n           <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n       </head>\n       <link rel=\"stylesheet\" type=\"text/css\" href=\"../../src/css/delivery-order.css\">\n       <body>\n           <div id=\"order-container\">\n               <h2>Observa\xE7\xF5es importantes</h2>\n               <div id=\"observation-container\">").concat(observations, "</div>\n\n                <div id=\"client-data-container\"> \n                    <div class=\"client-data\">\n                        <b>Nome completo:</b>\n                        ").concat(firstName, " ").concat(lastName, "\n                    </div>\n                    <div class=\"client-data\">\n                        <b>Telefone/celular</b>\n                        ").concat(phoneNumber, "\n                    </div>\n                    <div class=\"client-data\">\n                        <b>Endere\xE7o completo:</b>\n                        ").concat(logradouro, ", ").concat(addressNumber, ", ").concat(complement, ", ").concat(bairro, ",\n                        ").concat(city, " - ").concat(cep, " \n                    </div>\n                    <div class=\"client-data\">\n                        <b>Referencia:</b> ").concat(reference, " -  ").concat(placeType, "\n                    </div>\n               </div>\n           \n               <h2>Itens</h2>\n               <table>\n                   ").concat((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createItemRows)(), "\n                   ").concat((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createItemsSummaryRow)(), "\n               </table>\n\n               <h2>Pagamento</h2>\n               <table>\n                   ").concat((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createPaymentRows)(), "\n               </table>\n           </div>\n           <script>\n               window.print()\n           </script>\n       </body>\n       </html>");
  var deliveryOrder = window.open('', '_blank');
  deliveryOrder.document.write(deliveryOrderHTML);
  deliveryOrder.document.close();
}

/***/ }),

/***/ "./src/js/modules/after-sales-processes/receipt.js":
/*!*********************************************************!*\
  !*** ./src/js/modules/after-sales-processes/receipt.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printReceipt)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/modules/after-sales-processes/utilities.js");

function printReceipt(cep, logradouro, addressNumber, complement, bairro, city, firstName, lastName, phoneNumber) {
  var receiptHTML = "\n        <!DOCTYPE html>\n        <html lang=\"pt-br\">\n\n        <head>\n            <meta charset=\"UTF-8\">\n            <title>Recibo</title>\n            <link rel=\"stylesheet\" type=\"text/css\" href=\"../../src/css/receipt.css\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        </head>\n\n        <body>\n            <div id=\"receipt-container\">\n                <header>\n                    <img src=\"../../assets/images/logo_empresarial.png\">\n                    <div>\n                        <span><b>M\xF3veis Morante</b></span>\n                        <br>\n                        <span><b>CNPJ:</b> 44.512.248.0001/07</span>\n                        <br>\n                        <span><b>Endere\xE7o:</b> Rua Astorga 489, Guaraituba, Colombo-PR,\n                        CEP 83410090.</span>\n                        <br>\n                        <span><b>Contato</b>: 41997493547 | 41992244631</span>\n                    </div>\n                </header>\n            \n                <div id=\"client-data-container\"> \n                    <div class=\"client-data\">\n                        Nome completo:\n                        ".concat(firstName, " ").concat(lastName, "\n                    </div>\n                    <div class=\"client-data\">\n                        Telefone/celular\n                        ").concat(phoneNumber, "\n                    </div>\n                    <div class=\"client-data\">\n                        Endere\xE7o completo:\n                        ").concat(logradouro, ", ").concat(addressNumber, ", ").concat(complement, ", ").concat(bairro, ",\n                        ").concat(city, " - ").concat(cep, "\n                    </div>\n                </div>\n                \n                <h2>Itens</h2>\n                <table id=\"items-table\">\n                    ").concat((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createItemRows)(), "\n                    ").concat((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createItemsSummaryRow)(), "\n                </table>\n        \n                <h2>Pagamento</h2>\n                <table id=\"payments-table\">\n                    ").concat((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createPaymentRows)(), "\n                </table>\n\n                <div id=\"signature\">\n                    Assinatura\n                </div>\n            </div>\n            <script>\n            \n            </script>\n        </body>\n        </html>");
  var receiptWindow = window.open('', '_blank');
  receiptWindow.document.write(receiptHTML);
  receiptWindow.document.close;
  setTimeout(function () {
    receiptWindow.print();
  }, 1000);
}

/***/ }),

/***/ "./src/js/modules/after-sales-processes/send-delivery-order.js":
/*!*********************************************************************!*\
  !*** ./src/js/modules/after-sales-processes/send-delivery-order.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendDeliveryOrder)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/modules/after-sales-processes/utilities.js");

function sendDeliveryOrder(cep, logradouro, addressNumber, complement, reference, bairro, city, placeType, firstName, lastName, phoneNumber, observations) {
  var message = "*Entrega para* ".concat(firstName, " ").concat(lastName, "\n    \n*AVISO:* ").concat(observations, "\n    \n*Itens:* ").concat((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createItemsText)(), "\n    \n*Tel/Cel:* ").concat(phoneNumber, "\n    \n*Endere\xE7o:* ").concat(logradouro, ",  ").concat(addressNumber, ", ").concat(complement, ", ").concat(bairro, ", ").concat(city, " - ").concat(cep, "\n    \n*Referencia:* ").concat(reference, " - ").concat(placeType);
  var messageURL = encodeURIComponent(message);
  window.open("https://api.whatsapp.com/send?phone=&text=".concat(messageURL), '_blank');
}

/***/ }),

/***/ "./src/js/modules/after-sales-processes/utilities.js":
/*!***********************************************************!*\
  !*** ./src/js/modules/after-sales-processes/utilities.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createItemRows: () => (/* binding */ createItemRows),
/* harmony export */   createItemsSummaryRow: () => (/* binding */ createItemsSummaryRow),
/* harmony export */   createItemsText: () => (/* binding */ createItemsText),
/* harmony export */   createPaymentRows: () => (/* binding */ createPaymentRows)
/* harmony export */ });
/* harmony import */ var _dom_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-mapper */ "./src/js/modules/dom-mapper.js");

function createItemsText() {
  var itemRows = document.querySelectorAll('.item-rows');
  var items = "";
  for (var i = 1; i < itemRows.length + 1; i++) {
    var itemDescription = document.querySelector('#item-description-input-' + i).value;
    var amount = document.querySelector('#amount-input-' + i).value;
    var item = "".concat(itemDescription, " (").concat(amount, "un), ");
    items += item;
  }
  ;
  return items;
}
;
function createItemRows() {
  var itemRows = document.querySelectorAll('.item-rows');
  var rows = "\n        <tr>\n            <th>Descri\xE7\xE3o</th>\n            <th>Quantidade</th>\n            <th>Pre\xE7o final</th>\n        </tr>\n    ";
  for (var i = 1; i < itemRows.length + 1; i++) {
    var itemDescription = document.querySelector('#item-description-input-' + i).value;
    var amount = document.querySelector('#amount-input-' + i).value;
    var finalPrice = document.querySelector('#final-price-td-' + i).innerText;
    var row = "\n            <tr>\n                <td>".concat(itemDescription.toUpperCase(), "</td>\n                <td class=\"amount-tds\">").concat(amount, "</td>\n                <td>\n                    <div class=\"value-containers\">\n                        <div>R$</div>\n                        <div>").concat(finalPrice, "</div>\n                    </div>\n                </td>\n            </tr>\n        ");
    rows += row;
  }
  ;
  return rows;
}
;
function createItemsSummaryRow() {
  var totalAmount = _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.totalAmountTd.innerText;
  var totalfinalPrice = _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.totalFinalPriceTd.innerText;
  var row = "\n        <tr>\n            <th style=\"background-color: white; border: none\">\n            <th>Quantidade total</th>\n            <th>Pre\xE7o final total</th>\n        </tr>\n        <tr>\n            <td style=\"background-color: white; border: none\">\n            <td class=\"amount-tds\">\n                ".concat(totalAmount, "\n            </td>\n            <td>\n                <div>\n                    <div class=\"value-containers\">\n                        <div>R$</div> \n                        <div\">").concat(totalfinalPrice, "</div>\n                    <div>\n                </div>\n            </td>\n        </tr>\n    ");
  return row;
}
function createPaymentRows() {
  var paymentRows = document.querySelectorAll('.payment-rows');
  var rows = "\n        <tr>\n            <th>M\xE9todo</th>\n            <th>Valor</th>\n            <th class=\"payment-status-column\">Status</th>\n        </tr>\n    ";
  for (var i = 1; i < paymentRows.length + 1; i++) {
    var paymentMethod = document.querySelector('#payment-method-select-' + i).value;
    var paymentValue = document.querySelector('#payment-value-input-' + i).value;
    var paymentStatus = document.querySelector('#payment-status-select-' + i).value;
    var row = "\n            <tr>\n                <td>".concat(paymentMethod, "</td>\n                <td>\n                    <div class=\"value-containers\"> \n                        <div>R$</div>\n                        <div>").concat(paymentValue, "</div>\n                    </div>\n                </td>\n                <td class=\"payment-status-column\">\n                    ").concat(paymentStatus, "\n                </td>\n            </tr>\n        ");
    rows += row;
  }
  ;
  return rows;
}
;

/***/ }),

/***/ "./src/js/modules/dom-mapper.js":
/*!**************************************!*\
  !*** ./src/js/modules/dom-mapper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemBtn: () => (/* binding */ addItemBtn),
/* harmony export */   addressNumberInput: () => (/* binding */ addressNumberInput),
/* harmony export */   bairroInput: () => (/* binding */ bairroInput),
/* harmony export */   cepInput: () => (/* binding */ cepInput),
/* harmony export */   cityInput: () => (/* binding */ cityInput),
/* harmony export */   complementInput: () => (/* binding */ complementInput),
/* harmony export */   firstNameInput: () => (/* binding */ firstNameInput),
/* harmony export */   itemDescriptionInput1: () => (/* binding */ itemDescriptionInput1),
/* harmony export */   itemsSummaryHeader: () => (/* binding */ itemsSummaryHeader),
/* harmony export */   itemsTable: () => (/* binding */ itemsTable),
/* harmony export */   lastNameInput: () => (/* binding */ lastNameInput),
/* harmony export */   logradouroInput: () => (/* binding */ logradouroInput),
/* harmony export */   observationsInput: () => (/* binding */ observationsInput),
/* harmony export */   paymentMethodsTable: () => (/* binding */ paymentMethodsTable),
/* harmony export */   paymentStatusSelect: () => (/* binding */ paymentStatusSelect),
/* harmony export */   phoneNumber2Input: () => (/* binding */ phoneNumber2Input),
/* harmony export */   phoneNumberInput: () => (/* binding */ phoneNumberInput),
/* harmony export */   placeTypeInput: () => (/* binding */ placeTypeInput),
/* harmony export */   printDeliveryOrderBtn: () => (/* binding */ printDeliveryOrderBtn),
/* harmony export */   printReceiptBtn: () => (/* binding */ printReceiptBtn),
/* harmony export */   referenceInput: () => (/* binding */ referenceInput),
/* harmony export */   remainingValueTd: () => (/* binding */ remainingValueTd),
/* harmony export */   remainingValueTr: () => (/* binding */ remainingValueTr),
/* harmony export */   sendDeliveryOrderBtn: () => (/* binding */ sendDeliveryOrderBtn),
/* harmony export */   totalAmountTd: () => (/* binding */ totalAmountTd),
/* harmony export */   totalDiscountPercentageTd: () => (/* binding */ totalDiscountPercentageTd),
/* harmony export */   totalDiscountTd: () => (/* binding */ totalDiscountTd),
/* harmony export */   totalFinalPriceTd: () => (/* binding */ totalFinalPriceTd),
/* harmony export */   totalPriceTd: () => (/* binding */ totalPriceTd)
/* harmony export */ });
var itemsTable = document.querySelector('#items-table');
var itemDescriptionInput1 = document.querySelector('#item-description-input-1');
var addItemBtn = document.querySelector('#add-item-btn');
var firstNameInput = document.querySelector('#first-name-input');
var lastNameInput = document.querySelector('#last-name-input');
var phoneNumberInput = document.querySelector('#phone-number-input');
var phoneNumber2Input = document.querySelector('#phone-number-2-input');
var paymentMethodsTable = document.querySelector('#payment-table');
var remainingValueTr = document.querySelector('#remaining-value-tr');
var remainingValueTd = document.querySelector('#remaining-value-td');
var paymentStatusSelect = document.querySelector('#payment-status-select');
var cepInput = document.querySelector('#cep-input');
var logradouroInput = document.querySelector('#logradouro-input');
var addressNumberInput = document.querySelector('#address-number-input');
var complementInput = document.querySelector('#complement-input');
var referenceInput = document.querySelector('#reference-input');
var bairroInput = document.querySelector('#bairro-input');
var cityInput = document.querySelector('#city-input');
var placeTypeInput = document.querySelector('#place-type-input');
var observationsInput = document.querySelector('#observations-input');
var itemsSummaryHeader = document.querySelector('#items-summary-header');
var totalAmountTd = document.querySelector('#total-amount-td');
var totalDiscountPercentageTd = document.querySelector('#total-discount-percentage-td');
var totalFinalPriceTd = document.querySelector('#total-final-price-td');
var totalPriceTd = document.querySelector('#total-price-td');
var totalDiscountTd = document.querySelector('#total-discount-td');
var printReceiptBtn = document.querySelector('#print-receipt-btn');
var printDeliveryOrderBtn = document.querySelector('#print-delivery-order-btn');
var sendDeliveryOrderBtn = document.querySelector('#send-delivery-order-btn');

/***/ }),

/***/ "./src/js/modules/items.js":
/*!*********************************!*\
  !*** ./src/js/modules/items.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItem: () => (/* binding */ addItem),
/* harmony export */   finalPrice: () => (/* binding */ finalPrice),
/* harmony export */   itemsSummary: () => (/* binding */ itemsSummary),
/* harmony export */   sumFields: () => (/* binding */ sumFields)
/* harmony export */ });
/* harmony import */ var _dom_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-mapper */ "./src/js/modules/dom-mapper.js");

function addItem(count) {
  var content = "<tr class=\"item-rows\">\n            <td><input id=\"item-description-input-".concat(count, "\" class=\"item-description-inputs form-control\" \n                    placeholder=\"Insira a descri\xE7\xE3o do item\"></td>\n            <td><input type=\"number\" value=\"1\" id=\"amount-input-").concat(count, "\" class=\"item-amount-inputs form-control\"\n                    placeholder=\"Insira a quantidade\"></td>\n            <td><input type=\"number\" id=\"price-input-").concat(count, "\" class=\"item-price-inputs form-control\"\n                    placeholder=\"Insira o pre\xE7o\"></td>\n            <td><input type=\"number\" id=\"discount-input-").concat(count, "\" class=\"item-discount-inputs form-control\"  \n                    placeholder=\"Insira o desconto\"></td>\n            <td id=\"final-price-td-").concat(count, "\" class=\"item-final-price-tds\"></td>\n            <td><i class=\"remove-row-btns bi bi-dash-circle\"></i></td>\n         </tr>");
  _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.itemsSummaryHeader.insertAdjacentHTML('beforebegin', content);
}
function itemsSummary() {
  var itemAmountInputs = document.querySelectorAll('.item-amount-inputs');
  var itemFinalPriceTds = document.querySelectorAll('.item-final-price-tds');
  _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.totalAmountTd.innerText = sumFields(itemAmountInputs);
  _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.totalFinalPriceTd.innerText = sumFields(itemFinalPriceTds);
}
function sumFields(fields) {
  var fieldsArray = Array.from(fields);
  var total = fieldsArray.reduce(function (total, field) {
    if (field.tagName.toLowerCase() === 'input') {
      var value = parseFloat(field.value);
      return isNaN(value) ? total : total + value;
    }
    if (field.tagName.toLowerCase() === 'td') {
      var _value = parseFloat(field.innerText);
      return isNaN(_value) ? total : total + _value;
    }
  }, 0);
  return total;
}
function finalPrice(price, amount, discount) {
  return "".concat(price * amount - discount * amount);
}

/***/ }),

/***/ "./src/js/modules/payment.js":
/*!***********************************!*\
  !*** ./src/js/modules/payment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPaymentMethod: () => (/* binding */ addPaymentMethod),
/* harmony export */   remainingValue: () => (/* binding */ remainingValue)
/* harmony export */ });
/* harmony import */ var _dom_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-mapper */ "./src/js/modules/dom-mapper.js");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ "./src/js/modules/items.js");


function addPaymentMethod(count) {
  var html = "<tr class=\"payment-rows\">\n            <td>\n                <select id=\"payment-method-select-".concat(count, "\" class=\"payment-method-selects form-select\" aria-label=\"Large select example\">\n                    <option selected>Selecione</option>\n                    <option value=\"PIX\">PIX</option>\n                    <option value=\"Dinheiro\">Dinheiro</option>\n                    <option value=\"Cart\xE3o de D\xE9bito\">Cart\xE3o de D\xE9bito</option>\n                    <optgroup label=\"Cart\xE3o de Cr\xE9dito\">\n                        <option value=\"Credito 1x\">1x</option>\n                        <option value=\"Credito 2x\">2x</option>\n                        <option value=\"Credito 3x\">3x</option>\n                        <option value=\"Credito 4x\">4x</option>\n                        <option value=\"Credito 5x\">5x</option>\n                        <option value=\"Credito 6x\">6x</option>\n                        <option value=\"Credito 7x\">7x</option>\n                        <option value=\"Credito 8x\">8x</option>\n                        <option value=\"Credito 9x\">9x</option>\n                        <option value=\"Credito 10x\">10x</option>\n                    </optgroup>\n                    <optgroup label=\"Boleto\">\n                        <option value=\"Boleto 1x\">1x</option>\n                        <option value=\"Boleto 2x\">2x</option>\n                        <option value=\"Boleto 3x\">3x</option>\n                        <option value=\"Boleto 4x\">4x</option>\n                        <option value=\"Boleto 5x\">5x</option>\n                        <option value=\"Boleto 6x\">6x</option>\n                        <option value=\"Boleto 7x\">7x</option>\n                        <option value=\"Boleto 8x\">8x</option>\n                        <option value=\"Boleto 9x\">9x</option>\n                        <option value=\"Boleto 10x\">10x</option>\n                    </optgroup>\n                </select>\n            </td>\n            <td>\n            <input type=\"number\" id=\"payment-value-input-").concat(count, "\" class=\"payment-value-inputs form-control\"\n                placeholder=\"Insira o valor\">\n            </td>\n            <td>\n                <select id=\"payment-status-select-").concat(count, "\" class=\"payment-status-selects form-select\" aria-label=\"Large select example\">\n                    <option value=\"Pago\" selected>Pago</option>\n                    <option value=\"Pendente\">Pendente</option>\n                </select>         \n            </td>\n            <td><i class=\"remove-row-btns bi bi-dash-circle\"></i></td>\n        </tr>");
  _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.remainingValueTr.insertAdjacentHTML('beforebegin', html);
}
function remainingValue() {
  var totalFinalPrice = _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.totalFinalPriceTd.innerText;
  var paymentValueInputs = document.querySelectorAll(".payment-value-inputs");
  var totalPaymentValue = (0,_items__WEBPACK_IMPORTED_MODULE_1__.sumFields)(paymentValueInputs);
  _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.remainingValueTd.innerText = totalFinalPrice - totalPaymentValue;
}

/***/ }),

/***/ "./src/js/modules/search_address.js":
/*!******************************************!*\
  !*** ./src/js/modules/search_address.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchAddress)
/* harmony export */ });
/* harmony import */ var _dom_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-mapper */ "./src/js/modules/dom-mapper.js");
/* harmony import */ var _valid_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valid_form */ "./src/js/modules/valid_form.js");


function searchAddress() {
  var cep = _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.cepInput.value;
  cep = cep.replace(/\D/g, '');
  if (cep.length === 8) {
    var cepErrorTextInput = _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.cepInput.nextElementSibling;
    cepErrorTextInput.innerHTML = '';
    fetch("https://viacep.com.br/ws/".concat(cep, "/json/")).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.erro) {
        (0,_valid_form__WEBPACK_IMPORTED_MODULE_1__["default"])(_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.cepInput, 'CEP não encontrado. Por favor, digite um CEP válido.');
        return;
      }
      ;
      _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.logradouroInput.value = data.logradouro;
      _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.bairroInput.value = data.bairro;
      _dom_mapper__WEBPACK_IMPORTED_MODULE_0__.cityInput.value = data.localidade;
    })["catch"](function (error) {
      (0,_valid_form__WEBPACK_IMPORTED_MODULE_1__["default"])(_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.cepInput, 'Ocorreu um erro ao buscar o endereço. Por favor, tente novamente mais tarde.');
    });
  }
  ;
}
;

/***/ }),

/***/ "./src/js/modules/valid_form.js":
/*!**************************************!*\
  !*** ./src/js/modules/valid_form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createError)
/* harmony export */ });
function createError(field, text) {
  field.insertAdjacentHTML('afterend', "<p class=\"error-text\">".concat(text, "</p>"));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h2 { background-color: black;}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA,KAAK,uBAAuB,CAAC","sourcesContent":["h2 { background-color: black;}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-mapper */ "./src/js/modules/dom-mapper.js");
/* harmony import */ var _modules_after_sales_processes_receipt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/after-sales-processes/receipt */ "./src/js/modules/after-sales-processes/receipt.js");
/* harmony import */ var _modules_after_sales_processes_delivery_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/after-sales-processes/delivery-order */ "./src/js/modules/after-sales-processes/delivery-order.js");
/* harmony import */ var _modules_after_sales_processes_send_delivery_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/after-sales-processes/send-delivery-order */ "./src/js/modules/after-sales-processes/send-delivery-order.js");
/* harmony import */ var _modules_payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/payment */ "./src/js/modules/payment.js");
/* harmony import */ var _modules_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/items */ "./src/js/modules/items.js");
/* harmony import */ var _modules_search_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/search_address */ "./src/js/modules/search_address.js");
/* harmony import */ var _src_css_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/css/main.css */ "./src/css/main.css");








var countItemId = 2;
var countPaymentMethodId = 2;
function SalesFormController() {
  var _this = this;
  this.init = function () {
    _this.handleEvent();
  };
  this.handleEvent = function () {
    document.addEventListener('input', function (e) {
      var targetEl = e.target;
      var tr = targetEl.closest('tr');
      if (targetEl.classList.contains('item-price-inputs') || targetEl.classList.contains('item-discount-inputs') || targetEl.classList.contains('item-amount-inputs')) {
        var priceInput = tr.querySelector('.item-price-inputs');
        var amountInput = tr.querySelector('.item-amount-inputs');
        var discountInput = tr.querySelector('.item-discount-inputs');
        var finalPriceTd = tr.querySelector('.item-final-price-tds');
        finalPriceTd.innerText = (0,_modules_items__WEBPACK_IMPORTED_MODULE_5__.finalPrice)(priceInput.value, amountInput.value, discountInput.value);
        (0,_modules_items__WEBPACK_IMPORTED_MODULE_5__.itemsSummary)();
        (0,_modules_payment__WEBPACK_IMPORTED_MODULE_4__.remainingValue)();
      }
      if (targetEl.classList.contains('payment-value-inputs')) {
        (0,_modules_payment__WEBPACK_IMPORTED_MODULE_4__.remainingValue)();
      }
      if (targetEl.id === 'cep-input') {
        (0,_modules_search_address__WEBPACK_IMPORTED_MODULE_6__["default"])();
      }
    });
    document.addEventListener('click', function (e) {
      e.preventDefault();
      var targetEl = e.target;
      var cep = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.cepInput.value;
      var logradouro = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.logradouroInput.value;
      var addressNumber = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.addressNumberInput.value;
      var complement = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.complementInput.value;
      var reference = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.referenceInput.value;
      var bairro = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.bairroInput.value;
      var city = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.cityInput.value;
      var placeType = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.placeTypeInput.value;
      var firstName = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.firstNameInput.value;
      var lastName = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.lastNameInput.value;
      var phoneNumber = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.phoneNumberInput.value;
      var phoneNumber2 = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.phoneNumber2Input.value;
      var observations = _modules_dom_mapper__WEBPACK_IMPORTED_MODULE_0__.observationsInput.value;
      if (targetEl.id === 'add-item-btn') {
        (0,_modules_items__WEBPACK_IMPORTED_MODULE_5__.addItem)(countItemId++);
      }
      if (targetEl.id === 'add-payment-method-btn') {
        (0,_modules_payment__WEBPACK_IMPORTED_MODULE_4__.addPaymentMethod)(countPaymentMethodId++);
      }
      if (targetEl.classList.contains('remove-row-btns')) {
        var tr = targetEl.closest('tr');
        tr.remove();
      }
      if (targetEl.id === 'print-receipt-btn') {
        (0,_modules_after_sales_processes_receipt__WEBPACK_IMPORTED_MODULE_1__["default"])(cep, logradouro, addressNumber, complement, bairro, city, firstName, lastName, phoneNumber);
      }
      if (targetEl.id === 'print-order-delivery-btn') {
        (0,_modules_after_sales_processes_delivery_order__WEBPACK_IMPORTED_MODULE_2__["default"])(cep, logradouro, addressNumber, complement, reference, bairro, city, placeType, firstName, lastName, phoneNumber, observations);
      }
      if (targetEl.id === 'send-order-delivery-btn') {
        (0,_modules_after_sales_processes_send_delivery_order__WEBPACK_IMPORTED_MODULE_3__["default"])(cep, logradouro, addressNumber, complement, reference, bairro, city, placeType, firstName, lastName, phoneNumber, observations);
      }
    });
  };
}
var form = new SalesFormController();
form.init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map