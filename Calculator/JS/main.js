const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.container')

//Verifica se alguma tecla foi acionada
keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   // Fazer algo
 }
})