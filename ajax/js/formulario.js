function validarFormulario() {
    var nome = $('#nome');
    var cpf = $('#cpf');
    var dataNascimento = $('#data_nascimento');
    var sexoM = $('#sexo_m')[0].checked;
    var sexoF = $('#sexo_f')[0].checked;
    var profissao = $('#profissao');
    var musicaPagode = $('#musica_pagode')[0].checked;
    var musicaRock = $('#musica_rock')[0].checked;
    var musicaForro = $('#musica_forro')[0].checked;
    
    var invalidos = [];
    
    //$('#nome').closest('.form-group').removeClass('has-error has-success');
    if(nome.val().trim() === '') {
        invalidos.push('Nome');
        //nome.style.backgroundColor = 'red';
        //$('#nome').closest('.form-group').addClass('has-error');
        addErrorClass('#nome');
    } else {
        //$('#nome').closest('.form-group').addClass('has-success');
        addSuccessClass('#nome');
    }
    if(!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf.val().trim())) {
        invalidos.push('CPF');
        addErrorClass('#cpf');
    } else {
        addSuccessClass('#cpf');
    }
    if(dataNascimento.val().trim() === '') {
        invalidos.push('Data Nascimento');
        addErrorClass('#data_nascimento');
    } else {
        addSuccessClass('#data_nascimento');
    }
    if(!sexoM && !sexoF) {
        invalidos.push('Sexo');
        addErrorClass('#sexo_m');
    } else {
        addSuccessClass('#sexo_m');
    }
    if(profissao.val() === '') {
        invalidos.push('Profissão');
        addErrorClass('#profissao');
    } else {
        addSuccessClass('#profissao');
    }
    if(!musicaPagode && !musicaRock && !musicaForro) {
        invalidos.push('Gosto musical');
        addErrorClass('#musica_pagode');
    } else {
        addSuccessClass('#musica_pagode');
    }

    if(invalidos.length > 0) {
        //alert('Favor informar os campos: ' + invalidos.join(', '));
        $('#message').text(
            'Favor informar os campos: ' + invalidos.join(', ')
        );
        $('#validationModal').modal();
        return false;
    }

    return true;
}

function maskCpf(event) {
    var value = event.target.value.replace(/\D/g, '');
    if(value.length > 11) {
        value = value.substring(0,11);
    }
    if(value.length > 9) {
        event.target.value =
            value.replace(
                /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
                '$1.$2.$3-$4'
            );
    } else if(value.length > 6) {
        event.target.value =
        value.replace(
            /(\d{3})(\d{3})(\d{1,3})/,
            '$1.$2.$3'
        );
    } else if(value.length > 3) {
        event.target.value =
        value.replace(
            /(\d{3})(\d{1,3})/,
            '$1.$2'
        );
    } else {
        event.target.value = value;
    }
}

function removeValidationClass(selector) {
    $(selector).closest('.form-group').removeClass('has-error has-success');
}

function addErrorClass(selector) {
    removeValidationClass(selector);
    $(selector).closest('.form-group').addClass('has-error');
}

function addSuccessClass(selector) {
    removeValidationClass(selector);
    $(selector).closest('.form-group').addClass('has-success');
}