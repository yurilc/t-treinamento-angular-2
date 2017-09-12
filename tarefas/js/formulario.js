function salvar(event) {
    event.preventDefault();

    var id = $('#id').val();
    if(id === '') {
        id = new Date().getTime();
    }

    var tarefa = {
        id: id,
        descricao: $('#descricao').val(),
        prazo: $('#prazo').val(),
        local: $('#local').val()
    };

    //TODO: validações

    if($('#id').val() === '') {
        APP.tarefas.push(tarefa);
    } else {
        var index = -1;
        for(var i = 0; i < APP.tarefas.length; i++) {
            if(APP.tarefas[i].id == tarefa.id) {
                index = i;
                break;
            }
        }
        if(index > -1) {
            APP.tarefas.splice(index, 1, tarefa);
        }
    }

    carregarLista();
}

function voltar() {
    carregarLista();
}