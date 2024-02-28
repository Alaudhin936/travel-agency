let changeBtn=document.getElementById("changeBtn");
let textContent=document.getElementById("textContent");
function randomColor(){
    let randomNum=Math.floor(Math.random()*256);
function changeColor(){
   return `rgb(${randomNum},${randomNum},${randomNum})`;
}
 return changeColor();
}

changeBtn.onclick=function(){
textContent.textContent=randomColor();
    document.body.style.backgroundColor=randomColor();
}  