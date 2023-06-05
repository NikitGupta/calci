
function mul(){
    let a=(document.getElementById("number1").value);
    let b=(document.getElementById("number2").value);
    let ans=a*b;
    document.getElementById("result").innerHTML="answer is "+ans;
   
}
function add(){
    let a=+(document.getElementById("number1").value);
    let b=+(document.getElementById("number2").value);
    let ans=a+b;
    document.getElementById("result").innerHTML="answer is "+ans;
   
}
function div(){
    let a=Number(document.getElementById("number1").value);
    let b=Number(document.getElementById("number2").value);
    let ans=a/b;
    ans=ans.toFixed(2);
    document.getElementById("result").innerHTML="answer is "+ans;
   
}
function sub(){
    let a=(document.getElementById("number1").value);
    let b=(document.getElementById("number2").value);
    let ans=a-b;
    document.getElementById("result").innerHTML="answer is "+ans;
   
}
function mod(){
    let a=+(document.getElementById("number1").value);
    let b=+(document.getElementById("number2").value);
    let ans=a%b;
    document.getElementById("result").innerHTML="answer is "+ans;
   
}