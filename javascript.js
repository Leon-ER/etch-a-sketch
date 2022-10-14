// Makes the initial 16 containers
let containers = document.querySelector('#container_main');
let divs;
for(i=0; i<16; i++){
    const subContainers = document.createElement('div');
    subContainers.id = "container" +i;
    containers.appendChild(subContainers);
    // makes the grids inside those containers
    let container = document.querySelector(`#container${i}`);
    for(let a=0; a<16; a++){
        divs = document.createElement('div');
        divs.classList.add('test');
        container.appendChild(divs);
    }

} 
const divClicked = document.querySelectorAll('.test')
divClicked.forEach((divs) => {
    divs.addEventListener('mouseover', () => {
        divs.id = 'colored';
        console.log('clicked')
    })
});

const btn = document.querySelector('#clear');
btn.addEventListener('click', () => {
   
});