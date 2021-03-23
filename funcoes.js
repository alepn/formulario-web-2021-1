function validarFormulario(formulario) {

    for(i=0; i<formulario.length-2; i++){
        if(formulario[i].value == ''){
            return false;
        }
    }

    return true;

}

function enviarFormulario(formulario) {   

    var validacao = validarFormulario(formulario);

    if(validacao) {
        document.querySelector("tbody").innerHTML += `\
        <tr>\
        <td>${formulario.nome.value}</td>\
        <td>${formulario.email.value}</td>\
        <td>${formulario.telefone.value}</td>\
        </tr>\
        `;
        
        document.querySelector("table").setAttribute('class', '');

        formulario.reset();
    }
    else{
        alert("Preencha os campos do formulário!");
    }

    return false;
}