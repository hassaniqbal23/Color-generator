const btn=document.querySelector("button");
var body =document.querySelector("body");


function generator(){
 return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}

btn.addEventListener("click" ,()=>{
    body.style.backgroundColor=generator();

})




// setInterval(()=>{
//     body.style.backgroundColor=generator();
// },20)