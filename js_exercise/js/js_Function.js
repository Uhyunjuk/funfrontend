// 선언적 함수
function jsFunc1(){
    var pTag = document.querySelector("#p1");
    pTag.innerHTML = "jsFunc1() 함수 실행완료";
}
// 익명함수
var jsFunc2 = function (){
    document.querySelector("#p2").innerHTML = "jsFunc2() 함수 실행완료";
}

// IIFE

// 함수 전달인자, 매개변수
function resultJsFunc4(){
    jsFunc4(23,5,10);
}
function jsFunc4(value, value2, value3){
    document.querySelector("#p4").innerHTML = "결과 값 : " + (value + value2 + value3) + "<br>";
}

// 함수 리턴처리
function resultJsFunc5(){
    var result = jsFunc5();
    // console.log(result);
    document.querySelector("#p5").innerHTML=result;
}
function jsFunc5(){
    return Math.floor(Math.random()*100 + 1);
}
function calculatePlus(num1, num2, operator){
    var result = 0;
    switch(operator){
        case '+' : return num1+num2; break;
    }
    return result;
}

// 매개변수로 함수 전달
function callFuncTenTimes(otherFunc){
    for(var i=0; i<10; i++){
        otherFunc(i); 
        // calleeFunc(0);
        // calleeFunc(1);
        // calleeFunc(2);
        // ...
        // calleeFunc(9);
        // console.log(i);
    }
}
function calleeFunc(num){
    // console.log(num);
    var pTag = document.querySelector("#p6");
    document.querySelector("#p6").innerHTML += (num+1) + "번째 함수 호출 완료<br>";
}
callFuncTenTimes(calleeFunc);

// 익명함수를 리턴하는 함수
function jsReturnFunc(){
    var nameTag = document.querySelector("#name");
    var pTag = document.querySelector("#p7");
    return function() {
        pTag.innerHTML = nameTag.value;
    }();
}

