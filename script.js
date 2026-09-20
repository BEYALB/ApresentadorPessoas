 
 const  mostrarMensagem=document.querySelector(".mensagem");
 
 function mostrarApresetacao(){
    const inputPessoa=document.getElementById("inputPessoa");

    mostrarMensagem.textContent= "Ola, " + inputPessoa.value + " seja bem vindo(a)";
    inputPessoa.value="";
    


 }