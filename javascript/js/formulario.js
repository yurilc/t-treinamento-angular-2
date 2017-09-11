function validarFormulario() {
    var nome = document.getElementById('nome');
    var cpf = document.getElementById('cpf');
    var dataNascimento = document.getElementById('data_nascimento');
    var sexoM = document.getElementById('sexo_m').checked;
    var sexoF = document.getElementById('sexo_f').checked;
    var profissao = document.getElementById('profissao');
    var musicaPagode = document.getElementById('musica_pagode').checked;
    var musicaRock = document.getElementById('musica_rock').checked;
    var musicaForro = document.getElementById('musica_forro').checked;
    
    var invalidos = [];
    
    if(nome.value.trim() === '') {
        invalidos.push('Nome');
        nome.style.backgroundColor = 'red';
    } else {
        nome.style.backgroundColor = 'white';
    }
    if(cpf.value.trim() === '') {
        invalidos.push('CPF');
        cpf.style.backgroundColor = 'red';
    } else {
        cpf.style.backgroundColor = 'white';
    }
    if(dataNascimento.value.trim() === '') {
        invalidos.push('Data Nascimento');
        dataNascimento.style.backgroundColor = 'red';
    } else {
        dataNascimento.style.backgroundColor = 'white';
    }
    if(!sexoM && !sexoF) {
        invalidos.push('Sexo');
    }
    if(profissao.value === '') {
        invalidos.push('Profissão');
        profissao.style.backgroundColor = 'red';
    } else {
        profissao.style.backgroundColor = 'white';
    }
    if(!musicaPagode && !musicaRock && !musicaForro) {
        invalidos.push('Gosto musical');
    }

    if(invalidos.length > 0) {
        alert('Favor informar os campos: ' + invalidos.join(', '));
        return false;
    }

    return true;
}