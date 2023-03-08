var cep;
function consultaCEP(){
    $(".barra-progresso").show();
//var mean = document.getElementById("mean");
 cep = document.getElementById("idcep").value;
var url = `https://viacep.com.br/ws/${cep}/json/`

    $.ajax({
url: url,
type: "GET",
success: function(response){
    console.log(response);
    //console.log(response.bairro);

    $("#cep").html("CEP "+response.cep);
    $("#logradouro").html(response.logradouro);
    $("#bairro").html(response.bairro);
    $("#localidade").html(response.localidade);
    $("#uf").html(response.uf);
    $(".cep").show();
    $(".barra-progresso").hide();

}
 })   
} 

$(function(){ 

    $(".cep").hide();

    $(".barra-progresso").hide();

});
