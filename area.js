const submitBtn = document.querySelector('#submit-btn');
const sidesOfTriangle = document.querySelectorAll('.sides');
const outputBox = document.querySelector('#output-box');

console.log(submitBtn, sidesOfTriangle, outputBox);

function calculateArea() {
    let areaOfT = 1;
    for (let i = 0; i < sidesOfTriangle.length; i++) {
        areaOfT *= Number(sidesOfTriangle[i].value);
    }
    outputBox.innerText = `Area is ${areaOfT/2}`
}



submitBtn.addEventListener('click', calculateArea)