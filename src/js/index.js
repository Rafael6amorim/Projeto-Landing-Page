const imagens = document.querySelectorAll('.imagem-principal');
const setaAvancar = document.querySelector('.btn-avancar');
const setaVoltar = document.querySelector('.btn-voltar');


let imagemAtual = 0;


setaAvancar.addEventListener('click' , () => {
    if(imagemAtual === imagens.length -1){
        return;
    }
    esconderImagem();
    imagemAtual++;
    imagens[imagemAtual].classList.add('mostrar')
})
setaVoltar.addEventListener('click' , () => {
    if(imagemAtual === 0){
        return;
    }
    esconderImagem();
    imagemAtual--;
    imagens[imagemAtual].classList.add('mostrar')
})



function esconderImagem (){
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}

