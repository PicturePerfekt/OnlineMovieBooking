var bulb = document.getElementsByClassName('box');

bulb.addEventListener('click' , function onClick(event){
    bulb.style.color = "black";
    bulb.style.backgroundColor = "yellow";
    console.log("Clicked");
});