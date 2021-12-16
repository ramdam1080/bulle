const score = document.querySelector('h1')
const btn = document.querySelector('button')
let counter = 0


const bullle = () => {
    const bubble = document.createElement('span')
    document.body.appendChild(bubble)

    const size = Math.random() * 200 + 80 + 'px'

    bubble.style.height = size;
    bubble.style.width = size;
    bubble.classList.add('bubble')
    bubble.style.top = Math.random() * 30 + 70 + '%'
    bubble.style.left = Math.random() * 100 + '%'


    const plusminus = Math.random() > 0.5 ? 1 : -1
    bubble.style.setProperty('--left', Math.random() * 200 * plusminus + '%')

    setTimeout(() => {
        bubble.remove()
    }, 6000);

    bubble.addEventListener('click', () => {

        bubble.remove()
        counter++
        score.textContent = counter

    })

btn.addEventListener('click',()=>{

bubble.remove()
counter=0
score.textContent=counter

})

}



setInterval(() => {
    bullle()
}, 300);