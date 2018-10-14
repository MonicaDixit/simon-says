var smallDivs = document.querySelectorAll('.small');

smallDivs.forEach((el) => {
    el.addEventListener('click', changeBigDivColor);
})



function changeBigDivColor(e) {
    let bigDiv = document.querySelector('.big');
    let smallDivCol = window.getComputedStyle(e.target).getPropertyValue('background-color');
    bigDiv.style.backgroundColor = smallDivCol;
}



function changeRandomDiv() {
    console.log('changing div')
    let random = Math.floor(Math.random() * Math.floor(4));
    let smallDivArr = Array.from(smallDivs);
    let originalOp = smallDivArr[random].style.opacity;
    smallDivArr[random].classList.add("magic");

    setTimeout(function () {
        smallDivArr[random].classList.remove("magic");
    }, 500);
}


function doEffect() {
    let count = 0;
    
        var myInterval = setInterval(function() {
            changeRandomDiv();
            count++;
            if (count === 4) {
                clearInterval(myInterval);
            }
        }, 1000);
}
doEffect();


