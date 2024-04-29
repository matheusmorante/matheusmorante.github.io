import { createPaymentRows, createItemRows, createItemsSummaryRow } from "./utilities";

export default function printDeliveryOrder(cep, logradouro, addressNumber, complement, reference,
    bairro, city, placeType, firstName, lastName, phoneNumber, observations) {
   const deliveryOrderHTML = `
       <!DOCTYPE html>
       <html lang="pt-br">

       <head>
           <meta charset="UTF-8">
           <title>Pedido da ${firstName}</title
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
       </head>
       <link rel="stylesheet" type="text/css" href="../../src/css/delivery-order.css">
       <body>
           <div id="order-container">
               <h2>Observações importantes</h2>
               <div id="observation-container">${observations}</div>

                <div id="client-data-container"> 
                    <div class="client-data">
                        <b>Nome completo:</b>
                        ${firstName} ${lastName}
                    </div>
                    <div class="client-data">
                        <b>Telefone/celular</b>
                        ${phoneNumber}
                    </div>
                    <div class="client-data">
                        <b>Endereço completo:</b>
                        ${logradouro}, ${addressNumber}, ${complement}, ${bairro},
                        ${city} - ${cep} 
                    </div>
                    <div class="client-data">
                        <b>Referencia:</b> ${reference} -  ${placeType}
                    </div>
               </div>
           
               <h2>Itens</h2>
               <table>
                   ${createItemRows()}
                   ${createItemsSummaryRow()}
               </table>

               <h2>Pagamento</h2>
               <table>
                   ${createPaymentRows()}
               </table>
           </div>
           <script>
               window.print()
           </script>
       </body>
       </html>`;
  
       const deliveryOrder = window.open('', '_blank');
       deliveryOrder.document.write(deliveryOrderHTML);
       deliveryOrder.document.close();
}