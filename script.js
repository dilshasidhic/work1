
    // ------face----

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})
prev.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})






// <!-- ------ more product------- 5 -->


let list = document.querySelectorAll('.list');
let prob = document.querySelectorAll('.prob')

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click',function(){
        for(let j = 0; j<list.length;j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<prob.length; k++){
            prob[k].classList.remove('active');
            prob[k].classList.add('hide');

            if(prob[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                prob[k].classList.remove('hide')
                prob[k].classList.add('active')

            }
        }
    })
}