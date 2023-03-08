
function consultaCEP(){
 $.ajax({
url: "https://viacep.com.br/ws/14800390/json/",
type: "GET",
sucess: function(response){
    console.log(response);
}
 })   
} 