var cep;
function consultaCEP(){

//var mean = document.getElementById("mean");
 cep = document.getElementById("idcep").value;
var url = `https://viacep.com.br/ws/${cep}/json/`
console.log(cep);
console.log(url);
    $.ajax({
url: url,
type: "GET",
success: function(response){
    console.log(response);
    //console.log(response.bairro);

    $("#cep").html(response.cep);
    $("#logradouro").html(response.logradouro);
    $("#bairro").html(response.bairro);
    $("#localidade").html(response.localidade);
    $("#uf").html(response.uf);

    mean.innerHTML = `${response.cep}</br> ${response.logradouro} </br> ${response.bairro}</br> ${response.localidade}</br> ${response.uf}`
}
 })   
} 