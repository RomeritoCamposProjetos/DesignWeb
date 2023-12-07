
let box = document.querySelector('.box')
box.setAttribute('data-x', 0);
box.setAttribute('data-y', 0);
box.setAttribute('data-r', false);


let evento = (event) => {
    pos1 = event.clientX - 50;
    pos2 = event.clientY - 50;
    let box = document.querySelector('.box')
    box.setAttribute('data-x', (pos1 + 'px'))
    box.setAttribute('data-y', (pos2 + 'px'))   
    box.style.top = box.getAttribute('data-y');
    box.style.left = box.getAttribute('data-x');
}

box.addEventListener('mousedown', (event) => {
    event.target.addEventListener('mousemove', evento);    
});


box.addEventListener('mouseup', (event)=>{
    event.target.removeEventListener('mousemove', evento);
});

box.addEventListener('dblclick', (event)=>{

    const inverter = event.target.getAttribute('data-r');
    event.target.setAttribute('data-r', !inverter);

    console.log( !inverter);
    if (inverter) {
        event.target.style.borderRadius = '50%';
    } else {
        event.target.style.borderRadius = 0;
    }
});