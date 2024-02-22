const
    colorBlock = document.querySelectorAll('.header2__colors-block'),
    memoryBlock = document.querySelectorAll('.header2__memory-block');


for (let i = 0; i < colorBlock.length; i++) {
    colorBlock[i].addEventListener('click', function () {
        for (let c = 0; c < colorBlock.length; c++) {
            colorBlock[c].classList.remove('active')
        }
        colorBlock[i].classList.add('active')
    })
}

for (let m = 0; m < memoryBlock.length; m++) {
    memoryBlock[m].addEventListener('click', function () {
        for (let r = 0; r < memoryBlock.length; r++) {
            memoryBlock[r].classList.remove('active')
        }
        memoryBlock[m].classList.add('active')
    })
}


const decreaseBtn = document.getElementById("decreaseBtn"),
    increaseBtn = document.getElementById("increaseBtn"),
    countResult = document.getElementById("result"),
    decreaseBtn2 = document.getElementById("decreaseBtn2"),
    increaseBtn2 = document.getElementById("increaseBtn2"),
    countResult2 = document.getElementById("result2");

let count = 0;

increaseBtn.onclick = function () {
    count++;
    countResult.textContent = count
}

decreaseBtn.onclick = function () {
    count = Number(countResult.innerHTML) - 1;
    if (count >= 1) {
        countResult.innerHTML = count
    }
}

increaseBtn2.onclick = function () {
    count++;
    countResult2.textContent = count
}

decreaseBtn2.onclick = function () {
    count = Number(countResult2.innerHTML) - 1;
    if (count >= 1) {
        countResult2.innerHTML = count
    }
}












