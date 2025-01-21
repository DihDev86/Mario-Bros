const mario = document.querySelector('.mario');//seleciona o mario
const pipe = document.querySelector('.pipe');//seleciona o cano

//função para pular
const jump = () => {
    mario.classList.add('jump');

    //remove a classe jump depois de 500ms
    setTimeout(() => {//Essa função espera 500ms para executar o que está dentro dela
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {//função para verificar se o mario colidiu com o cano
    const pipePosition = pipe.offsetLeft;//pega a posição do cano
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');//pega a posição do mario no momento do click, ou seja, pulo.
    //explicação de window.getComputedStyle(mario).bottom.replace('px', ' '): 
    //window.getComputedStyle(mario) pega o estilo do mario, bottom pega a posição do mario em relação ao bottom, replace('px', ' ') substitui o px por um espaço vazio, ou seja, remove o px.


    if(pipePosition <= 120 && marioPosition <80){//verifica se o mario colidiu com o cano
        pipe.style.animation = 'none';//remove a animação do cano
        pipe.style.left = `${pipePosition}px`//mantém o cano na mesma posição que o mario colidiu

    }
},10);//a cada 10ms ele verifica se o mario colidiu com o cano

document.addEventListener('keydown', jump);//adiciona o evento de click para pular

