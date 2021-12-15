// const counter = document.querySelector('h1')
// let counterd = 0


// const b = () => {


//     const bubble = document.createElement('span')
//     document.body.appendChild(bubble)
//     const size = Math.random() * 200 + 100 + "px"

//     bubble.classList.add('bubble')

//     bubble.style.height = size;
//     bubble.style.width = size;


//     // const po = Math.random()*100+"%"

//     bubble.style.top = Math.random() * 100 + 50 + "%";
//     bubble.style.left = Math.random() * 100 + '%';


//     const plusminus = Math.random() > 0.5 ? 1 : -1
//     bubble.style.setProperty('--left', Math.random() * 100 * plusminus + '%')


//     bubble.addEventListener('click', () => {
//         counterd++
//         counter.textContent = counterd


//         bubble.remove()

//     })


//     setTimeout(() => {
//         bubble.remove()

//     }, 8000);



// }




// setInterval(() => {
//     b()

// }, 300);

const h1 = document.querySelector('h1')
const bouton = document.querySelector('button')

let counter = 0


const go = () =>{
    const bubble = document.createElement('span')
document.body.appendChild(bubble)

const size = Math.random()*200+100+'px'

bubble.style.height= size;
bubble.style.width= size;
bubble.classList.add('bubble')

bubble.style.top =  Math.random()*80+50+'%'
bubble.style.left =  Math.random()*80+20+'%'

const plusminus = Math.random() > 0.5 ? 1 :-1


bubble.style.setProperty('--left',Math.random()*80*plusminus+'%')
setTimeout(() => {
    bubble.remove()
}, 6000);


bubble.addEventListener('click',()=>{

bubble.remove()
counter++
h1.textContent=counter

})
bouton.addEventListener('click' ,()=>{

bubble.remove()
counter=0-1


})



}


setInterval(() => {
    go()
    
}, 300);


