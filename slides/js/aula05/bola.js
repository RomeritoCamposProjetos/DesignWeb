

let bola = document.getElementsByClassName('bola')[0];

let container = document.querySelector('.container')
let width = container.clientWidth
let height = container.clientHeight

let chutaBola = (event) => {
    
    //saida lateral
    let offsetleft = parseInt(bola.dataset.left)+ bola.clientWidth
    if ( offsetleft > width || parseInt(bola.dataset.left) < 0 ) {
        bola.dataset.x = parseInt(bola.dataset.x) * -1;
    }

    offsettop = parseInt(bola.dataset.top) + bola.clientHeight
    if (offsettop > height || parseInt(bola.dataset.top) < 0) {
        bola.dataset.y = parseInt(bola.dataset.y) * -1;
    }

    let top = parseInt(bola.dataset.y) + parseInt(bola.dataset.top);
    let left = parseInt(bola.dataset.x) + parseInt(bola.dataset.left);
    bola.setAttribute('data-top', top);
    bola.setAttribute('data-left', left);   

    bola.style.top = top+'px';
    bola.style.left = left + 'px';

    // bola.style.animationName = '';
    // bola.style.animationDuration = '';

}

bola.addEventListener('change', chutaBola);

setInterval(chutaBola, 1);

addEventListener('keyup' , (event)=>{
    if (event.key === 'ArrowUp') {
        bola.dataset.y = -1;
    }

    if (event.key === 'ArrowDown') {
        bola.dataset.y = 1;
    }

    if (event.key === 'ArrowLeft') {
        bola.dataset.x = -1;
    }

    if (event.key === 'ArrowRight') {
        bola.dataset.x = 1;
    }

    if (event.key === ' ') {
        bola.dataset.x = 0;
        bola.dataset.y = 0;
    }
});

