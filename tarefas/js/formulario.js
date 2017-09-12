function salvar(event) {
    event.preventDefault();

    var tarefa = {
        id: new Date().getTime(),
        descricao: $('#descricao').val(),
        prazo: $('#prazo').val(),
        local: $('#local').val()
    };

    //TODO: validações

    APP.tarefas.push(tarefa);

    carregarLista();
}

function voltar() {
    carregarLista();
}