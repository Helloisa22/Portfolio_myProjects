campoCep = document.getElementById("cep");

function buscaCEP(){
    let linkViaCep = `https://viacep.com.br/ws/${campoCep}/json/`;
    console.log(linkViaCep)

    // let response = fetch(linkViaCep, {
        
    // })
}

campoCep.addEventListener("change", buscaCEP);