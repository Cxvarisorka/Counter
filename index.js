const numberPlace = document.getElementById('count-num');
const buttonArr = document.querySelectorAll('.buttons > button');

let num = 0

buttonArr.forEach((btn) => {
    btn.addEventListener('click', function(){
        const btnId = this.id;
        if(btnId === 'decrease'){
            num--;
        } else if(btnId === 'reset'){
            num = 0;
        } else{
            num++;
        }

        let color = 'rgb(16, 42, 66)';

        if(num > 0){
            color = 'green';
        } else if(num < 0){
            color = 'red';
        } else{
            color = 'rgb(16, 42, 66)';
        }

        numberPlace.style.color = color;
        numberPlace.textContent = num;
    });
});

// buttonArr[0].addEventListener('click',() =>{
//     num--;
//     if(num < 0){
//         numberPlace.style.color = 'red';
//     } else if(num === 0){
//         numberPlace.style.color = 'rgb(16, 42, 66)';
//     }
//     numberPlace.textContent = num;
// });

// buttonArr[1].addEventListener('click',() => {
//     num = 0;
//     numberPlace.style.color = 'rgb(16, 42, 66)';
//     numberPlace.textContent = num;
// });

// buttonArr[2].addEventListener('click',() => {
//     num++;
//     if(num > 0){
//         numberPlace.style.color = 'green';
//     } else if(num === 0){
//         numberPlace.style.color = 'rgb(16, 42, 66)';
//     }
//     numberPlace.textContent = num;
// });