let tabuada = document.querySelector('.my-span'); // Pegar o Span
let reserva = document.querySelector('#numero'); // Pegar o numero dentro input

const Calcular = () => {
    let numeroTabuada = reserva.value;
    if(numeroTabuada == ''){
        alert("Insira um valor")
    }else{
        for(i = 0; i <= 10; i++){
            tabuada.innerHTML += `${numeroTabuada} x ${[i]} = ${numeroTabuada * [i]} <br/>`
        }
    }
    console.log(numeroTabuada)
}

const Limpar = () => {
    document.querySelector('.my-span').innerHTML="";
    document.querySelector('#numero').value="";
}
