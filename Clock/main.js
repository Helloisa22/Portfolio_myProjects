let botao = document.getElementById("botao");
let hora = document.getElementById("hora");
let minuto = document.getElementById("minuto");
let segundo = document.getElementById("segundo");
let container = document.getElementById("container");
let main = document.getElementsByClassName("main");

let myTheme = true;

function mudarTema(){
    if(myTheme){
        sectionRelogio.style.backgroundColor = "black";
        document.getElementById("botao").classList.add("botaoBranco");
        document.getElementById("botao").classList.remove("botaoPadrao");
        botao.innerText = "Theme white";
        document.getElementById("container").classList.add("containerBranco");
        document.getElementById("container").classList.remove("containerPadrao");
    }else{
        sectionRelogio.style.backgroundColor = "white";
        document.getElementById("botao").classList.remove("botaoBranco");
        document.getElementById("botao").classList.add("botaoPadrao");
        botao.innerText = "Theme dark";
        document.getElementById("container").classList.remove("containerBranco");
        document.getElementById("container").classList.add("containerPadrao");
    }
    myTheme = !myTheme;
}

botao.addEventListener("click", mudarTema)

const updateRelogio = () =>{
    let relogio = new Date();

    hora.innerText = relogio.getHours() <= 9 ? "0"+relogio.getHours() : relogio.getHours();
    minuto.innerText = relogio.getMinutes() <= 9 ? "0"+relogio.getMinutes() : relogio.getMinutes();
    segundo.innerText = relogio.getSeconds() <= 9 ? "0"+relogio.getSeconds() : relogio.getSeconds();
}

// SetInterval
setInterval(updateRelogio, 1000)