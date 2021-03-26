$("form").submit(function(event){
    event.preventDefault();
    var nome = $("#nome").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var linha = $("tbody").html();
    linha += `
        <tr>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
        </tr>
    `;
    $("tbody").html(linha);
    $("table").show();
});