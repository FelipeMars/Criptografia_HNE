var chaveElement = document.getElementById('key');
var msgElement = document.getElementById('txtMsg');
var msgCriptoElement = document.getElementById('txtMsgCripto')
var btnMsgElement = document.getElementById('btnMsg');
var btnDescElement = document.getElementById('btnDesc');

var hne = ['d','4','t','m','0','+','k',':','l','6','.','"','(','j','s','?','1','f','n',')','ç','7','p','e',',','g','-','r','3','c','a','q','b','h','i','/','o','2','w','5','x','v','=','z','u','y',' ','$','8','*','#','9','@','!','%','é','ã','D','T','M','K','L','J','S','F','N'];

btnMsgElement.onclick = function() {
    var msg = msgElement.value.toLowerCase();
    var key = chaveElement.value.toLowerCase();

    if ((msg === "") || (key === "")) {
        alert("Verifique se você inseriu a mensagem e a chave corretamente!");
        return false;
    }
    
    var finalKey = "";
    for (partial of key) {
        finalKey += hne.indexOf(partial);
    }

    var n = 0;
    var msgCripto = "";
    for (letra of msg) {
        var index = parseInt(hne.indexOf(letra)) + parseInt(finalKey[n]);
        
        if (n === finalKey.length - 1) {
            n = 0;
        } else {
            n++;
        }

        msgCripto += hne[parseInt(index)];
    }

    msgCriptoElement.value = msgCripto;
}

btnDescElement.onclick = function() {
    var msg = msgCriptoElement.value;
    var key = chaveElement.value.toLowerCase();

    if ((msg === "") || (key === "")) {
        alert("Verifique se você inseriu a mensagem criptografada e a chave corretamente!");
        return false;
    }

    var finalKey = "";
    for (partial of key) {
        finalKey += hne.indexOf(partial);
    }

    var n = 0;
    var msgCripto = "";
    for (letra of msg) {
        var index = parseInt(hne.indexOf(letra)) - parseInt(finalKey[n]);
        
        if (n === finalKey.length - 1) {
            n = 0;
        } else {
            n++;
        }

        msgCripto += hne[parseInt(index)];
    }

    msgElement.value = msgCripto;
}