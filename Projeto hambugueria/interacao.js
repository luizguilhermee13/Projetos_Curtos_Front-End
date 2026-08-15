var listaHamburguer = [];

function acessarcarrinho(){

    var divs = document.getElementsByClassName('carrinhopai');
    var div = divs[0]; // Acessando o primeiro elemento da coleção
     
     if(div.style.display === 'none'){
         div.style.display = 'flex';
     }else{
         div.style.display = 'none';
     }    
 }


function pedir(){

   var divs = document.getElementsByClassName('carrinhopai');
   var div = divs[0]; // Acessando o primeiro elemento da coleção
   var endereco = document.getElementById('local'); 

    if(div.style.display === 'flex' && endereco.value != ""){
        div.style.display = 'none';
        window.alert("pedido realizado com sucesso");
        
    }else{
        div.style.display = 'flex';
        window.alert("digite um endereço");
    }    
}


function fecharcarrinho(){
    var divs = document.getElementsByClassName('carrinhopai');
    var div = divs[0]; // Acessando o primeiro elemento da coleção
     
     if(div.style.display === 'flex'){
         div.style.display = 'none';
     }else{
         div.style.display = 'flex';
     }    
 }  



// Adicionar item ao carrinho
function add(button) {
    var cardBody = button.closest('.cards_body');
    var nomePedido = cardBody.querySelector('h2').innerText;
    var valorPedidoTexto = cardBody.querySelector('span').innerText.replace('valor:', '').replace('R$', '').trim();
    var valorNumerico = parseFloat(valorPedidoTexto);

    if (isNaN(valorNumerico)) {
        console.error('Erro na conversão do valor do pedido:', valorPedidoTexto);
        alert('Erro na conversão do valor do pedido. Por favor, verifique os dados.');
        return; // Interrompe a execução da função se o valor não for um número
    }

    var pedido = {
        nome_pedido: nomePedido,
        valorpedido: valorNumerico // Certifique-se de que a propriedade está corretamente nomeada
    };

    listaHamburguer.push(pedido);
    localStorage.setItem('cart', JSON.stringify(listaHamburguer));
    updateCarrinho();
}


function updateCarrinho() {
    var pedidos = "";
    listaHamburguer.forEach(function(pedido, index) {
        // Verifica se 'valorpedido' é um número válido
        if (pedido.valorpedido != null && !isNaN(pedido.valorpedido)) {
            var valorFormatado = pedido.valorpedido.toFixed(2);
            pedidos += `<br> <div>${pedido.nome_pedido} </br> Valor: R$ ${valorFormatado} <button onclick="removerItem(${index})">Remover</button></div>`;
        } else {
            console.error('Valor inválido encontrado no carrinho:', pedido);
            pedidos += `<div>${pedido.nome_pedido} <br> Valor inválido <button onclick="removerItem(${index})">Remover</button></div>`;
        }
    });
    document.getElementById("dadoscarrinho").innerHTML = pedidos;
}

function removerItem(itemId) {
    listaHamburguer.splice(itemId, 1);
    localStorage.setItem('cart', JSON.stringify(listaHamburguer));
    updateCarrinho();
}

function loadCart() {
    listaHamburguer = JSON.parse(localStorage.getItem('cart')) || [];
    updateCarrinho();
}


window.onload = loadCart;