function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + hex.padStart(6, '0');
  }
  let interval;
function colorchange(){
    if(!interval){
        interval = setInterval(color,1000)
    }
    function color(){
        document.body.style.backgroundColor = getRandomHexColor();
    }
}
function stopchange(){
    clearInterval(interval)
    interval = null
}

document.querySelector("#Start").addEventListener('click', colorchange);
document.querySelector("#Stop").addEventListener('click', stopchange);
