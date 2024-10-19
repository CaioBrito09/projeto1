const muda = document.querySelector('.anima');


function start() {
    window.location.href = "/questionario/game.html";
}


function testa(){
    const formulaEnviada = document.getElementById("form").value
    if(formulaEnviada=="resp1"){
        window.location.href="/jogo/comecaMini.html";
    }

}


