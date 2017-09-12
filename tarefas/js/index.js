var APP = {};

$(document).ready(function() {
    carregarLista();
});

function carregarLista() {
    $('#conteudo').load('tarefas.html');
}

function carregarFormulario(callback) {
    $('#conteudo').load('formulario.html', callback);
}