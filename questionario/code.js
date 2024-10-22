const pasta= location.pathname
console.log(pasta)
document.addEventListener("keydown",function(press){
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena1'){
        window.location.href="/questionario/Cena2.html";
    }
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena2'){
        window.location.href="/questionario/Cena3.html";
    }
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena3'){
        window.location.href="/questionario/Cena4.html";
    }
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena4'){
        window.location.href="/questionario/Cena5.html";
    }
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena5'){
        window.location.href="/questionario/Cena6.html";
    }
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena6'){
        window.location.href="/questionario/Cena7.html";
    }
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena7'){
        window.location.href="/questionario/Cena8.html";
    }
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena8'){
        window.location.href="/questionario/Cena9.html";
    }
    if((press.key===" "||press.key==="Spacebar")&&pasta==='/questionario/cena9'){
        window.location.href="/questionario/game.html";
    }
}
)
const start = (x) => {
    window.location.href = "/questionario/Cena1.html";
}

const testa = (x) => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp3"){
        window.location.href="game2.html";
    }
    if(formulaEnviada!=="resp3") {
        window.location.href="gameover1.html";
    }

}
const testa2 = (x) => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp4"){
        window.location.href="game3.html";
        contagem(3)
    }
    if(formulaEnviada!=="resp4") {
        window.location.href="gameover1.html";
    } 
}
const contagem = (x) => {
    console.log(x)
    if (x > 0) {
        setTimeout(function(y) {
        contagem(x - 1)}, 1000);
    } 
    else {
        window.location.href="/jogo/comecaMini.html";
    }
      }
const testa3 = (x) => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp1"){
        window.location.href="fase.html";
        
    }
    if(formulaEnviada!=="resp1") {
        window.location.href="gameover1.html";
    }

}

function verificaGif(){
    if(pasta==="/questionario/fase.html"){
        contagem(6)
    }
}
verificaGif()
