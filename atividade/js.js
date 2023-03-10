function mudarCorInput() {
    document.getElementById("nomeID").style.backgroundColor = '#000000';
}

function procurarCidade() {
let nome = document.getElementById("estadoID").value;
$.ajax({
url: "retornaCidades.php",
type: "POST",
data: "estado="+nome,
dataType: "html"
}).done(function(resposta) {
console.log(resposta);
$('#cidadeID').html(resposta);
}).fail(function(jqXHR, textStatus) {
console.log("Request failed: " + textStatus);
}).always(function() {
console.log("completou");
});
}