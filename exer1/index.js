var nomeGlobal;
var mensagemGlobal;
var dateGlobal;

document.getElementById("flexSwitchCheckDefault").addEventListener("change", function() {
    var body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
    } else {
        body.classList.add("dark-mode");
    }
});

function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = formatarData(date);
    document.getElementById("enviar").style.display = "block";
}

function enviar() {
    var numeroTelefone = "5541999999999";

    var hora = dateGlobal.getHours();
    var minutos = dateGlobal.getMinutes();
    var segundos = dateGlobal.getSeconds();
    var dataFormatada = dateGlobal.getDate() + '-' + (dateGlobal.getMonth() + 1) + '-' + dateGlobal.getFullYear() + ' ' + hora + ':' + minutos + ':' + segundos;

    var linkWhatsApp =
        "https://wa.me/" +
        numeroTelefone +
        "?text=Contato: " +
        nomeGlobal +
        ", Observações: " +
        mensagemGlobal +
        ", Data de Recebimento: " +
        dataFormatada;

    window.open(linkWhatsApp);
}

function formatarData(date) {
    var dia = date.getDate().toString().padStart(2, '0');
    var mes = (date.getMonth() + 1).toString().padStart(2, '0');
    var ano = date.getFullYear();
    var hora = date.getHours().toString().padStart(2, '0');
    var minutos = date.getMinutes().toString().padStart(2, '0');
    var segundos = date.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}