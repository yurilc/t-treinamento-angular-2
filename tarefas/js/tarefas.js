if(!APP.tarefas) {
    APP.tarefas = [];
}

$(document).ready(function() {
    for(var i = 0; i < APP.tarefas.length; i++) {
        var tr = $('<tr>');
        $('<td>').text(APP.tarefas[i].descricao).appendTo(tr);
        $('<td>').text(APP.tarefas[i].prazo).appendTo(tr);
        $('<td>').text(APP.tarefas[i].local).appendTo(tr);
        var opcoes = $('<td>').appendTo(tr);
        $('<button>')
            .attr('type', 'button')
            .attr('onclick', 'editar(' + APP.tarefas[i].id + ')')
            .text('Editar')
            .appendTo(opcoes);
        $('<button>')
            .attr('type', 'button')
            .attr('onclick', 'excluir(' + APP.tarefas[i].id + ')')
            .text('Excluir')
            .appendTo(opcoes);

        $('#tbTarefas>tbody').append(tr);
    }
});

function novaTarefa() {
    carregarFormulario();
}

function editar(id) {
    var tarefa;
    for(var i = 0; i < APP.tarefas.length; i++) {
        if(APP.tarefas[i].id === id) {
            tarefa = APP.tarefas[i];
            break;
        }
    }
    if(tarefa) {
        carregarFormulario(function() {
            $('#id').val(tarefa.id);
            $('#descricao').val(tarefa.descricao);
            $('#prazo').val(tarefa.prazo);
            $('#local').val(tarefa.local);
        });
    }
}

function excluir(id) {
    var index = -1;
    for(var i = 0; i < APP.tarefas.length; i++) {
        if(APP.tarefas[i].id == id) {
            index = i;
            break;
        }
    }
    if(index > -1) {
        APP.tarefas.splice(index, 1);
        $('#tbTarefas>tbody>tr:nth-child('+ (index +1) +')').remove();
    }

}