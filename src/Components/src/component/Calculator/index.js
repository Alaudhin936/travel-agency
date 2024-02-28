function call(){
let fruits=["apple","orange","banana","pineApple","Mango"];

let listFruits=fruits.map(fruit=>
   <li>{fruit}</li>)
return(<ul>{listFruits}</ul>)
}
console.log(call());