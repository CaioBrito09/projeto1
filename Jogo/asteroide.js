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
const gif = document.getElementById("explosao")
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

const descer=(asteroide,time,acelera,tamanho=70,tamanhoNave=80)=>{
    const tAsteroide= asteroide.clientHeight
    asteroide.style.opacity=1
    asteroide.style.height=`${tamanho}px`
    const altura = window.innerHeight +50
    const width= tamanhoPagina.clientWidth
    nave.style.width=`${tamanhoNave}px`
    const intervalo =setInterval(aumenta,time)
    function aumenta(){
        const posiçãoy= asteroide.offsetTop
        if(posiçãoy>=altura){
            clearInterval(intervalo)
            asteroide.style.top= `${-tAsteroide-10}px`
            asteroide.style.left =`${aleatorio(width)}px`
            descer(asteroide,time,acelera,tamanho,tamanhoNave)
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

const criaAsteroides=()=>{
    descer(asteroide,15,3,90,50)
    descer(asteroide2,10,3,50,50)
    descer(asteroide3,24,3,50,50)
    descer(asteroide4,17,4,50,50)
    descer(asteroide5,20,3,70,50)
    descer(asteroide6,12,3,60,50)
}

const criaAsteroides1=()=>{
    descer(asteroide,15,3,120,60)
    descer(asteroide2,10,3,70,60)
    descer(asteroide3,24,3,70,60)
    descer(asteroide4,28,3,140,60)
    descer(asteroide5,10,5,70,60)
    descer(asteroide6,20,3,90,60)
    descer(asteroide7,12,3,80,60)
}

const criaAsteroides2= ()=>{
    descer(asteroide,15,3,120)
    descer(asteroide2,10,3)
    descer(asteroide3,24,3)
    descer(asteroide4,28,3,170)
    descer(asteroide5,19,3)
    descer(asteroide6,10,5)
    descer(asteroide7,5,3,90)
    descer(asteroide8,6,4,80)
}


const criaAsteroides3= ()=>{
    descer(asteroide,28,3,70,90)
    descer(asteroide2,10,3,120,90)
    descer(asteroide3,7,3,70,90)
    descer(asteroide4,5,3,70,90)
    descer(asteroide5,24,4,70,90)
    descer(asteroide6,15,3,130,90)
    descer(asteroide7,19,3,150,90)
    descer(asteroide8,1,3,70,90)
    descer(asteroide9,6,3,90,90)
}

const criaAsteroides4= ()=>{
    descer(asteroide,28,3,200,100)
    descer(asteroide2,10,3,120,100)
    descer(asteroide3,7,3,110,100)
    descer(asteroide4,5,3,100,100)
    descer(asteroide5,24,4,160,100)
    descer(asteroide6,15,3,130,100)
    descer(asteroide7,19,3,150,100)
    descer(asteroide8,1,3,100,100)
    descer(asteroide9,6,3,90,100)
}

const criaAsteroides5= ()=>{
    descer(asteroide,15,4,200,120)
    descer(asteroide2,10,4,300,120)
    descer(asteroide3,7,6,90,120)
    descer(asteroide4,4,4,150,120)
    descer(asteroide5,24,4,90,120)
    descer(asteroide6,28,4,120,120)
    descer(asteroide7,19,4,90,120)
    descer(asteroide8,6,5,100,120)
    descer(asteroide9,9,5,110,120)
    descer(asteroide10,10,5,90,120)
}

const criaAsteroidesExtras=()=>{
    const width = tamanhoPagina.clientWidth
    if(width<=1200){
        criaAsteroides()
    }
    if(width>1200&&width<=1400){
        criaAsteroides1()
    }
    if(width>1400 && width<=1600){
        criaAsteroides2()
    }
    if(width>1600&& width<=1920){
        criaAsteroides3()
    }
    if(width>1920&&width<=2200){
        criaAsteroides4()
    }
    if(width>2200){
        criaAsteroides5()
    }
}

criaAsteroidesExtras()

const colisao=()=>{
    const width= tamanhoPagina.clientWidth
    setTimeout(colisao,0)
    const xNave = nave.offsetLeft
    const yNave = nave.offsetTop
    const wNave = nave.clientWidth
    const hNave = nave.clientHeight

    const xA1 = asteroide.offsetLeft
    const yA1 = asteroide.offsetTop
    const wA1 = asteroide.clientWidth
    const hA1 = asteroide.clientHeight

    const xA2 = asteroide2.offsetLeft
    const yA2 = asteroide2.offsetTop
    const wA2 = asteroide2.clientWidth
    const hA2 = asteroide2.clientHeight

    const xA3 = asteroide3.offsetLeft
    const yA3 = asteroide3.offsetTop
    const wA3 = asteroide3.clientWidth
    const hA3 = asteroide3.clientHeight

    const xA4 = asteroide4.offsetLeft
    const yA4 = asteroide4.offsetTop
    const wA4 = asteroide4.clientWidth
    const hA4 = asteroide4.clientHeight

    const xA5 = asteroide5.offsetLeft
    const yA5 = asteroide5.offsetTop
    const wA5 = asteroide5.clientWidth
    const hA5 = asteroide5.clientHeight

    const xA6 = asteroide6.offsetLeft
    const yA6 = asteroide6.offsetTop
    const wA6 = asteroide6.clientWidth
    const hA6 = asteroide6.clientHeight

    const xA7 = asteroide7.offsetLeft
    const yA7 = asteroide7.offsetTop
    const wA7 = asteroide7.clientWidth
    const hA7 = asteroide7.clientHeight

    const xA8 = asteroide8.offsetLeft
    const yA8 = asteroide8.offsetTop
    const wA8 = asteroide8.clientWidth
    const hA8 = asteroide8.clientHeight

    const xA9 = asteroide9.offsetLeft
    const yA9 = asteroide9.offsetTop
    const wA9 = asteroide9.clientWidth
    const hA9 = asteroide9.clientHeight

    const xA10 = asteroide10.offsetLeft
    const yA10 = asteroide10.offsetTop
    const wA10 = asteroide10.clientWidth
    const hA10 = asteroide10.clientHeight
    //console.log(xA1)
    if((xNave+(wNave/2)>=xA1 && xNave+(wNave/2)<=xA1+wA1) && (yNave>=yA1&& yNave<=yA1+hA1)||
       (xNave+(wNave/2)>=xA2 && xNave+(wNave/2)<=xA2+wA2) && (yNave>=yA2&& yNave<=yA2+hA2)||
       (xNave+(wNave/2)>=xA3 && xNave+(wNave/2)<=xA3+wA3) && (yNave>=yA3&& yNave<=yA3+hA3)||
       (xNave+(wNave/2)>=xA4 && xNave+(wNave/2)<=xA4+wA4) && (yNave>=yA4&& yNave<=yA4+hA4)||
       (xNave+(wNave/2)>=xA5 && xNave+(wNave/2)<=xA5+wA5) && (yNave>=yA5&& yNave<=yA5+hA5)||
       (xNave+(wNave/2)>=xA6 && xNave+(wNave/2)<=xA6+wA6) && (yNave>=yA6&& yNave<=yA6+hA6)||
       (xNave+(wNave/2)>=xA7 && xNave+(wNave/2)<=xA7+wA7) && (yNave>=yA7&& yNave<=yA7+hA7)||
       (xNave+(wNave/2)>=xA8 && xNave+(wNave/2)<=xA8+wA8) && (yNave>=yA8&& yNave<=yA8+hA8)||
       (xNave+(wNave/2)>=xA9 && xNave+(wNave/2)<=xA9+wA9) && (yNave>=yA9&& yNave<=yA9+hA9)||
       (xNave+(wNave/2)>=xA10 && xNave+(wNave/2)<=xA10+wA10) && (yNave>=yA10&& yNave<=yA10+hA10)
    ){
        nave.style.opacity=0
        gif.style.left = `${xNave}px`
        gif.style.top = `${yNave}px`
        gif.style.visibility= "visible"
        setInterval(mudaPagina, 800)
    }
    //limtando as bordas da página
    if(xNave<=0){
        nave.style.left = `0px`;
    }
    if(xNave+wNave>=width){
        nave.style.left=`${width-(wNave)}px`
    }
}
colisao()

// pegar o som de game over no Fl studio 21
//Barra de progresso
const barra=()=>{
 const progress = document.getElementById("progresso")
 const navezinha= document.getElementById("naveBarra")
 const barraTotal = progress.clientHeight
 console.log(barraTotal)
 const intervalo= setInterval(completa,70)
 function completa(){
    const atual = progress.clientHeight
    if(atual<=0){
        clearInterval(intervalo)
    }
    else{
        progress.style.height=`${atual-(barraTotal/1000)}px`
        navezinha.style.top=`${atual-(barraTotal/1000)}px`
    }
 }
}
barra()

const limita=tamanhoPagina.clientWidth
const limitay=tamanhoPagina.clientHeight
tamanhoPagina.style.maxWidth=`${limita}px`
tamanhoPagina.style.maxHeight=`${limitay}px`
