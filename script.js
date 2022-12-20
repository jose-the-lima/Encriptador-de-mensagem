// Regras.

/*
    1 - pegar os elementos da tela que vão sofrer reviravoltas

    2 - pegar o valor do textarea

    3 - mandar esse valor para a função que ele escolher na hora que apertar o botão

    4 - o segundo lado sempre vai ser a saida

    5 - precisará mudar alguns estilos, e tirar o background-image também.
*/

const inputMessage = document.querySelector(".cripto-block");

const btEncript = document.querySelector(".bt-criptografar");
const btDesencript = document.querySelector(".bt-descriptografar");


const backgroundMessageArea = document.querySelector(".block-result");
const infoMessageArea = document.querySelector(".result-info");

const messageArea = document.querySelector(".result-message-area");
const copyButton = document.querySelector(".bt-copy");

const letras = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

// Funções
function desativarBackground() {
    backgroundMessageArea.classList.add("sem-nada");
    infoMessageArea.classList.add("invisivel");

    messageArea.classList.remove("invisivel");
    copyButton.classList.remove("invisivel");
}

function ativarBackground() {
    backgroundMessageArea.classList.remove("sem-nada");
    infoMessageArea.classList.remove("invisivel");

    messageArea.classList.add("invisivel");
    copyButton.classList.add("invisivel");
}

function verificaValor(string) {
    if(string.length > 0) {
        desativarBackground();
        messageArea.innerHTML = string;
    } else {
        ativarBackground();
    }
}

function encriptar() {
    let value = inputMessage.value.toLowerCase();
    console.log(value);

    for(let i = 0; i < letras.length; i++) {
        console.log(value + " antes");
        value = value.replaceAll(letras[i][0], letras[i][1]);
        
        console.log(letras[i][0], letras[i][1]);
        console.log(value + " depois");
    }

    verificaValor(value);
}

function encriptar2() {
    let value = inputMessage.value.toLowerCase();
    let valueReference = value;
    let valueLength = value.length;
    let vogaisIniciais = letras.map((letra) => {
        return letra[0];
    });

    for(let i = 0; i < valueLength; i++) {
        if(vogaisIniciais.includes(value[i])){
            let letraSubstituta;
            for(let i = 0; i < letras.length; i++){
                if(valueReference[i] == letras[i][0]) {
                    letraSubstituta = letras[i][1];
                    console.log("Essa é a letra substituta " + letraSubstituta)
                    break;
                }
            }

            value = value.replace(value[i], letraSubstituta);
        }
    }

    verificaValor(value);
}

function desencriptar() {
    let value = inputMessage.value.toLowerCase();

    for(let i = 0; i < letras.length; i++) {
        value = value.replaceAll(letras[i][1], letras[i][0]);
    }

    verificaValor(value);
}

function copy() {
    navigator.clipboard.writeText(messageArea.innerHTML);
    messageArea.innerHTML = "";
    ativarBackground();
}

btEncript.addEventListener("click", encriptar);

btDesencript.addEventListener("click", desencriptar);

copyButton.addEventListener("click", copy);