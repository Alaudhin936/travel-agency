let myId=document.getElementById("myId")
let myBtn=document.getElementById("myBtn")
let myyBtn=document.getElementById("myyBtn")


myBtn.addEventListener("change",()=>{
    if(myBtn.checked){
        myId.type="text"
    }else {
        myId.type="password"
    }
})

myyBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(document.getElementById("myId").value="0-1"){
        alert("Please Enter a valid Password")
    }
})
