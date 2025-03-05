

let buttonNumber = document.querySelectorAll("#number")
let buttonSymbol = document.querySelectorAll("#symbol")
let buttonResult = document.getElementById("equalValue")
let buttonClear = document.getElementById("clear")
let answer = document.getElementById("answer")
let result = document.getElementById("result")
let output = 0;  //maybe useful for something
let temp = [2,3];
let ans = 0;




//all the function for +,-,x & /
function addition(inputNumber){
    
    
    let add = 0;    
    for(i=0;i<inputNumber.length;i++){
        add += inputNumber[i]
    }        
    return add;    
}


function subtraction(inputNumber){
    let minus = inputNumber[0];    
    for(i=1;i<inputNumber.length;i++){
        minus -= inputNumber[i]
    }
    return minus;
}

function multiplication(inputNumber){
    console.log(inputNumber);
    
    let multiply = 1;    
    for(i=0;i<inputNumber.length;i++){
        multiply *= inputNumber[i]
    }
    return multiply;
}




function division(inputNumber){
    let devide = inputNumber[0];    
    for(i=1;i<inputNumber.length;i++){
        devide /= inputNumber[i]
    }
    return devide;
}



buttonNumber.forEach(button =>{
    button.addEventListener("click",function(){
        result.innerText += button.innerText
        
    }); 
})

//when click the arithmetic symbol will choose which condition will happen when preess "="
buttonSymbol.forEach(button =>{
    button.addEventListener("click",function(){
        temp.push(Number(result.innerText))
        console.log(temp);
        
        result.innerText = "";
        if(button.innerText == "+"){
            output = 1
        }else if(button.innerText == "-"){
            output = 2
        }else if(button.innerText == "x"){
            output = 3
        }else{
            output = 4
        }
        
               
    })
})








buttonResult.addEventListener("click",resultCal)

//function when push the button '=' will choose between the calculation fx
function resultCal(){
    temp.push(Number(result.innerText))
    
     if(output === 1){
        ans = addition(temp)                        
     }else if(output === 2){
        ans = subtraction(temp)       
     }else if(output === 3){
        ans = multiplication(temp)
     }else{
        ans = division(temp)
     }
     console.log(ans);
     result.innerText = "";
     answer.innerText = ans
     
          
}


// function to clear the screen
buttonClear.addEventListener("click",function(){
    result.innerText = "";
    output = "";
    temp = [];
    ans = 0;
    answer.innerText = "";
})













              





















