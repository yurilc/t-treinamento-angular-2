$(document).ready(function(){
    $('#conteudo').load('receita.html');
});

function carregarFormulario() {
    $('#conteudo').load('formulario.html', function(){
        $('#nome').val('Nome de teste');
    });
}
