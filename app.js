let linhadeNumeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial () {
         exibirTextoNaTela ('h1','Jogo do número secreto');
         exibirTextoNaTela ('p','Escolha um número entre 1 e 10');
}
         exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value; 
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','acertou');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'tentativa';
        let mensagemTentativa = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');
        }
        else {
        exibirTextoNaTela('p','O número secreto é maior');

        limparcampo()
    }
    tentativas++
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 10 + 1); 
   let quantidadedeNumero = linhadeNumeroSorteado.length;

   if (quantidadedeNumero == 5) {
    linhadeNumeroSorteado = [];
   }
   if (linhadeNumeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    linhadeNumeroSorteado.push(numeroEscolhido);
    console.log(linhadeNumeroSorteado);
    return numeroEscolhido;
   }
}

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
