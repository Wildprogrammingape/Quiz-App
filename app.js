const correctAnswers = ['A','A','A','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
//const span = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; // element.name 来选中该input element, 类似于 .class

    // check answers
    userAnswers.forEach((answer , index) => {
        if (answer === correctAnswers[index]){
            score+= 25;
        }
    });

    

    // // show final score
    // span.innerText = score + "%";    // it's always a string
    // console.log(typeof span.innerText);
    // result.setAttribute('class','result py-4 bg-light text-center');

    // another way to do:
    window.scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;    // 选中 result下面的某个element
    result.classList.remove('d-none');                         // 删除特定class

    // animation
    let output = 0;
    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },10);

    console.log(typeof timer);

});

