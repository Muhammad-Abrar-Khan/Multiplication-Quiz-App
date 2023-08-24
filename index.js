const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const ques=document.getElementById("ques");
ques.innerText=`What is ${num1} multiply by ${num2}?`;
const correctans=num1*num2;
const formel=document.getElementById("form");
const inputel=document.getElementById("input");
formel.addEventListener("submit", ()=>{
    const userans= +inputel.value
    console.log(userans, typeof userans);
})