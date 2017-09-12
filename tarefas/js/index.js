var APP = {};

$(document).ready(function() {
    carregarLista();
});

function carregarLista() {
    $('#conteudo').load('tarefas.html');
}

function carregarFormulario() {
    $('#conteudo').load('formulario.html');
}