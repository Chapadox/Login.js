function valor() {
    if (document.getElementById("input1").value == 'chapadox_x' && document.getElementById("input2").value == '12345') {
        document.getElementById("divLogado").style.color = "green"
        document.getElementById("divLogado").innerHTML = "Voce logou";
    } else {
        document.getElementById("divLogado").style.color = "red"
        document.getElementById("divLogado").innerHTML = "Usuario ou Senha invalidos";
        setTimeout(function abc() {
            document.getElementById("divLogado").innerHTML = ""
        }, 3000)

    }
}


document.getElementById("botao1").onclick = valor;
