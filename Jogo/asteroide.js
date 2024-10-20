const asteroide = document.querySelector('.asteroide')
const asteroide2 = document.querySelector('.asteroide2')
const asteroide3 = document.querySelector('.asteroide3')
const asteroide4 = document.querySelector('.asteroide4')
const asteroide5 = document.querySelector('.asteroide5')
const asteroide6 = document.querySelector('.asteroide6')
const asteroide7 = document.querySelector('.asteroide7')
const asteroide8 = document.querySelector('.asteroide8')
const asteroide9 = document.querySelector('.asteroide9')
const asteroide10 = document.querySelector('.asteroide10')
const asteroide11 = document.querySelector('.asteroide11')
const asteroide12 = document.querySelector('.asteroide12')
const asteroide13 = document.querySelector('.asteroide13')
const asteroide14 = document.querySelector('.asteroide14')

const nave = document.querySelector('.nave')

const tamanhoPagina= document.querySelector('.body')
const gameOver= document.querySelector(".h1")


const mudaPagina =()=> {
    window.location.href = "gameOver.html";
}


document.addEventListener("keydown",function(press){
    const posiçãox = nave.offsetLeft;
    //const posiçãoy= nave.offsetTop
    if(press.key === "d"){  
        nave.style.left = `${posiçãox +15}px`;
        console.log(posiçãox) 
        }
    if(press.key==="a"){
            nave.style.left = `${posiçãox -15}px`;
            console.log(posiçãox)            
        }
    if(press.key==="Alt"){     
        press.preventDefault();
    }
/*
   if(press.key==="w"){
        console.log(tamanhoPagina.clientWidth)
        nave.style.top = `${posiçãoy -6}px`;           
    }
    if(press.key==="s"){
        console.log(tamanhoPagina.clientWidth)
        nave.style.top = `${posiçãoy +6}px`;           
    }
*/
}
)
//const width= tamanhoPagina.clientWidth

const aleatorio=(width)=>{
   return  Math.random()*(width+6)-6
}

//por o time entre 20 e 60

const descer=(asteroide,time,acelera)=>{
    asteroide.style.opacity=1
    const altura = window.innerHeight +50
    const width= tamanhoPagina.clientWidth
    const intervalo =setInterval(aumenta,time)
    function aumenta(){
        const posiçãoy= asteroide.offsetTop
        if(posiçãoy>=altura){
            clearInterval(intervalo)
            asteroide.style.top= `${-50}px`
            asteroide.style.left =`${aleatorio(width)}px`
            descer(asteroide,time,acelera)
        }
        
        else{asteroide.style.top = `${posiçãoy +acelera}px`;}
    }
    
}
/*
descer(asteroide,15)
descer(asteroide2,10)
descer(asteroide3,7)
descer(asteroide4,4)
descer(asteroide5,24)
descer(asteroide6,28)
descer(asteroide7,19)

/*function desaparece(){
    if(imagem.offsetTop==750){
    imagem.style.top= `${-50}px`    
    }
}*/

const criaAsteroides1= ()=>{
    descer(asteroide,15,3)
    descer(asteroide2,10,3)
    descer(asteroide5,24,3)
    descer(asteroide6,28,3)
    descer(asteroide7,19,3)
}


const criaAsteroides2= ()=>{
    descer(asteroide,28,3)
    descer(asteroide2,10,3)
    descer(asteroide3,7,3)
    descer(asteroide4,5,3)
    descer(asteroide5,24,3)
    descer(asteroide6,15,3)
    descer(asteroide7,19,3)
    descer(asteroide8,1,3)
    
}

const criaAsteroides3= ()=>{
    descer(asteroide,15,4)
    descer(asteroide2,10,4)
    descer(asteroide3,7,4)
    descer(asteroide4,4,4)
    descer(asteroide5,24,4)
    descer(asteroide6,28,4)
    descer(asteroide7,19,4)
    descer(asteroide8,1,4)
    descer(asteroide9,2,4)
    descer(asteroide10,0,4)
}

const criaAsteroidesExtras=()=>{
    const width = tamanhoPagina.clientWidth
    if(width>=900 && width<=1200){
        criaAsteroides2()
    }
    if(width<=700){
        criaAsteroides1()
    }
    if(width>= 1500&& width<=2000){
        criaAsteroides2()
    }
    else{
        criaAsteroides1()
    }
}

criaAsteroidesExtras()

const colisao=()=>{
    setTimeout(colisao,10)
    const xNave = nave.offsetLeft
    const yNave = nave.offsetTop

    const xA1 = asteroide.offsetLeft
    const yA1 = asteroide.offsetTop

    const xA2 = asteroide2.offsetLeft
    const yA2 = asteroide2.offsetTop

    const xA3 = asteroide3.offsetLeft
    const yA3 = asteroide3.offsetTop

    const xA4 = asteroide4.offsetLeft
    const yA4 = asteroide4.offsetTop

    const xA5 = asteroide5.offsetLeft
    const yA5 = asteroide5.offsetTop

    const xA6 = asteroide6.offsetLeft
    const yA6 = asteroide6.offsetTop

    const xA7 = asteroide7.offsetLeft
    const yA7 = asteroide7.offsetTop

    const xA8 = asteroide8.offsetLeft
    const yA8 = asteroide8.offsetTop
    //console.log(xA1)
    if((xNave+40>=xA1 && xNave+40<=xA1+70) && (yNave+35>=yA1&& yNave+35<=yA1+84.4)||
       (xNave+40>=xA2 && xNave+40<=xA2+70) && (yNave+35>=yA2&& yNave+35<=yA2+84.4)||
       (xNave+40>=xA3 && xNave+40<=xA3+70) && (yNave+35>=yA3&& yNave+35<=yA3+84.4)||
       (xNave+40>=xA4 && xNave+40<=xA4+70) && (yNave+35>=yA4&& yNave+35<=yA4+84.4)||
       (xNave+40>=xA5 && xNave+40<=xA5+70) && (yNave+35>=yA5&& yNave+35<=yA5+84.4)||
       (xNave+40>=xA6 && xNave+40<=xA6+70) && (yNave+35>=yA6&& yNave+35<=yA6+84.4)||
       (xNave+40>=xA7 && xNave+40<=xA7+70) && (yNave+35>=yA7&& yNave+35<=yA7+84.4)||
       (xNave+40>=xA8 && xNave+40<=xA8+70) && (yNave+35>=yA8&& yNave+35<=yA8+84.4)
    ){
        nave.style.opacity=0
        mudaPagina()
    }
}
colisao()

// pegar o som de game over no Fl studio 21
