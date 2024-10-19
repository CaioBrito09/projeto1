const start = (x) => {
    window.location.href = "questionario/game.html";
}


const testa = (x) => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp3"){
        window.location.href="game2.html";
    }
    if(formulaEnviada!=="resp3") {
        window.location.href="index.html";
    }

}
const testa2 = (x) => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp4"){
        window.location.href="game3.html";
        contagem(3)
    }
    if(formulaEnviada!=="resp4") {
        window.location.href="index.html";
    } 
}
const contagem = (x) => {
    console.log(x)
    if (x > 0) {
        setTimeout(function(y) {
        contagem(x - 1)}, 1000);
    } 
    else {
        window.location.href="minigame/comecaMini.html";
    }
      }
const testa3 = (x) => {
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp1"){
        window.location.href="fase.html";
        
    }
    if(formulaEnviada!=="resp1") {
        window.location.href="index.html";
    }

}
