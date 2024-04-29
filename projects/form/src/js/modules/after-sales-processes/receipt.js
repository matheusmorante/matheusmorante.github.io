import { createPaymentRows, createItemRows, createItemsSummaryRow } from "./utilities";

export default function printReceipt(cep, logradouro, addressNumber, complement, bairro,
    city, firstName, lastName, phoneNumber) {
    const receiptHTML = `
        <!DOCTYPE html>
        <html lang="pt-br">

        <head>
            <meta charset="UTF-8">
            <title>Recibo</title>
            <link rel="stylesheet" type="text/css" href="../../src/css/receipt.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>

        <body>
            <div id="receipt-container">
                <header>
                    <img src="../../assets/images/logo_empresarial.png">
                    <div>
                        <span><b>Móveis Morante</b></span>
                        <br>
                        <span><b>CNPJ:</b> 44.512.248.0001/07</span>
                        <br>
                        <span><b>Endereço:</b> Rua Astorga 489, Guaraituba, Colombo-PR,
                        CEP 83410090.</span>
                        <br>
                        <span><b>Contato</b>: 41997493547 | 41992244631</span>
                    </div>
                </header>
            
                <div id="client-data-container"> 
                    <div class="client-data">
                        Nome completo:
                        ${firstName} ${lastName}
                    </div>
                    <div class="client-data">
                        Telefone/celular
                        ${phoneNumber}
                    </div>
                    <div class="client-data">
                        Endereço completo:
                        ${logradouro}, ${addressNumber}, ${complement}, ${bairro},
                        ${city} - ${cep}
                    </div>
                </div>
                
                <h2>Itens</h2>
                <table id="items-table">
                    ${createItemRows()}
                    ${createItemsSummaryRow()}
                </table>
        
                <h2>Pagamento</h2>
                <table id="payments-table">
                    ${createPaymentRows()}
                </table>

                <div id="signature">
                    Assinatura
                </div>
            </div>
            <script>
            
            </script>
        </body>
        </html>`;
    const receiptWindow = window.open('', '_blank');

    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close
    setTimeout( function() {
       receiptWindow.print()
    }, 1000)
}



