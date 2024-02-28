let bye=document.querySelectorAll(".bye");
let hi=document.getElementById("hi");

bye.forEach(btn=>btn.addEventListener("click",()=>{
    hi.textContent=btn.textContent;
}))