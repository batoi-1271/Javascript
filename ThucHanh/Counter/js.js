const btndesC = document.querySelector('.icon-descrease');

const counter = document.getElementById('count');
const inputElement = document.querySelector('input[type="text"');

let countValue = document.getElementById('count').value;

const btninC = document.querySelector('.icon-increase');

btndesC.onclick = () => {
    if (countValue <= 1 ) return 1;
    countValue--;
    counter.value = countValue;
}

btninC.onclick = () => {
    if (countValue >= 10 ) return 10;

    countValue++;
    counter.value = countValue;
}
