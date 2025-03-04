

let buttonNumber = document.querySelectorAll("#number")
let buttonSymbol = document.querySelectorAll("#symbol")
let buttonResult = document.getElementById("equalValue")
let buttonClear = document.getElementById("clear")
let result = document.getElementById("result")
let output = "";  //maybe useful for something
let temp = [];




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



buttonNumber.forEach(button =>{
    button.addEventListener("click",function(){
        result.innerText += button.innerText
        
    }); 
})

buttonSymbol.forEach(button =>{
    button.addEventListener("click",function(){
        temp.push(result.innerText)
        result.innerText = "";
                
    })
})








buttonResult.addEventListener("click",resultCal)


function resultCal(){
    temp.push(result.innerText)
     console.log(temp);
     
          
}

buttonClear.addEventListener("click",function(){
    result.innerText = "";
    output = "";
    temp = [];
})













              





















