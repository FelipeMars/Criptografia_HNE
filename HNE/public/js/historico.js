var listElement = document.querySelector("div#historico");
var btnElement = document.getElementById("limpar");
var btnClearElement = document.getElementById("limparHistorico");


var historico = JSON.parse(localStorage.getItem("historico")) || [];

function renderHistorico() {
    listElement.innerHTML = '';
    var lenhist = historico.length;
    if (lenhist === 0) {
        var nenhumElement = document.createElement('img');
        nenhumElement.setAttribute("src", "../imagens/vazio.png");
        nenhumElement.setAttribute("id", "nenhum");

        listElement.appendChild(nenhumElement);
        btnElement.innerHTML = "";
    }

    var n = 0;
    for (item of historico){
        var data = historico[n].data;
        var chave = historico[n].chave;
        var msg = historico[n].msg;
        var msgCripto = historico[n].msgCripto;

        var historicoElement = document.createElement("table");
        historicoElement.setAttribute("id", "tabela");

        var trElement = document.createElement('tr');
        historicoElement.appendChild(trElement);

        var dataElement = document.createElement('td');
        dataElement.setAttribute("id", "data");
        var dataText = document.createTextNode(data);
        dataElement.appendChild(dataText);
        historicoElement.appendChild(dataElement);

        var msgElement = document.createElement('td');
        msgElement.setAttribute("id", "msg");
        var msgText = document.createTextNode(msg);
        msgElement.appendChild(msgText);
        historicoElement.appendChild(msgElement);

        var msgCriptoElement = document.createElement('td');
        msgCriptoElement.setAttribute("id", "msgcri");
        var msgCriptoText = document.createTextNode(msgCripto);
        msgCriptoElement.appendChild(msgCriptoText);
        historicoElement.appendChild(msgCriptoElement);

        var chaveElement = document.createElement('td');
        chaveElement.setAttribute("id", "chave");
        var chaveText = document.createTextNode(chave);
        chaveElement.appendChild(chaveText);
        historicoElement.appendChild(chaveElement);

        var pos = historico.indexOf(item);
        var excluirElement = document.createElement('td');
        excluirElement.setAttribute("id", "lixeira");
        var linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");
        linkElement.setAttribute("onclick", "deletarHistorico(" + pos + ")");
        var excluirImg = document.createElement('img');
        excluirImg.setAttribute("src", "../imagens/lixeira.png");
        linkElement.appendChild(excluirImg);
        excluirElement.appendChild(linkElement);
        historicoElement.appendChild(excluirElement);

        trElement.appendChild(dataElement);
        trElement.appendChild(msgElement);
        trElement.appendChild(msgCriptoElement);
        trElement.appendChild(chaveElement);
        trElement.appendChild(excluirElement);

        listElement.appendChild(historicoElement);

        n += 1;
    }
}

function deletarHistorico(pos) {
    historico.splice(pos, 1);
    renderHistorico();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem("historico", JSON.stringify(historico));
}

btnClearElement.onclick = function() {
    var r=confirm("Você deseja apagar todo o seu histórico?");
    if (r == true) {
        historico = [];
        renderHistorico();
        saveToStorage();
    }
}

renderHistorico ();