function copyToClipboard() {
    var copyText = document.getElementById("copiar");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.getElementById("message").innerHTML = "Texto copiado: " + copyText.value;
}
