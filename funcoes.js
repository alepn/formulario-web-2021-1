function enviarFormulario(formulario) {   

    document.getElementById("result-form").innerHTML += formulario.nome.value;

    return false;
}