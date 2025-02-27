

let buttonNumber = document.querySelectorAll("button")
let buttonSymbol = document.querySelectorAll("#symbol")
let buttonResult = document.getElementById("equalValue")
let result = document.getElementById("result")
let output = "";  //maybe useful for something



//all the function for +,-,x & /
function addition(...inputNumber){
    let add = 0;    
    for(i=0;i<inputNumber.length;i++){
        add += inputNumber[i]
    }
    return add;
}

function subtraction(...inputNumber){
    let minus = 0;    
    for(i=0;i<inputNumber.length;i++){
        minus -= inputNumber[i]
    }
    return minus;
}

function multiplication(...inputNumber){
    let multiply = 1;    
    for(i=0;i<inputNumber.length;i++){
        multiply *= inputNumber[i]
    }
    return multiply;
}

function division(...inputNumber){
    let devide = 1;    
    for(i=0;i<inputNumber.length;i++){
        devide /= inputNumber[i]
    }
    return devide;
}

//need to make a fucntion to show on screen



for(i=0; i<buttonNumber.length;i++ ){
    
    
    buttonNumber[i].addEventListener("click",function(){showScreen(buttonNumber[i].innerText)}); 
    
    console.log(buttonNumber[i].innerText);
       
}

function showScreen(i){  
    console.log(i);
          
    result.innerText = buttonNumber[i].innerText
            
}

















