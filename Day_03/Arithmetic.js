// Arithmetic Operators +
let x = 500;
document.getElementById("arinumber1").innerHTML = x;

document.getElementById("arioperator").innerHTML = "+";

let y = 200;
document.getElementById("arinumber2").innerHTML = y;



document.getElementById("ariBtn").onclick = function () {
 let z = x + y;
 document.getElementById("ariresult").innerHTML = z;

}



document.getElementById("ariReset").onclick = function () {
 document.getElementById("ariresult").innerHTML = "";
}

// Arithmetic Operators -


let a = 1000;
let b = 750;


document.getElementById("arinumberm1").innerHTML = a;
document.getElementById("arinumberm2").innerHTML = b;
document.getElementById("arioperatorm").innerHTML = "-";

document.getElementById("ariBtnm").onclick = function () {
 let c = a - b;
 document.getElementById("ariresultm").innerHTML = c;
}

document.getElementById("ariResetm").onclick = function () {
 document.getElementById("ariresultm").innerHTML = "";
}



// Arithmetic Operators *
let d = 800;
let e = 2;


document.getElementById("arinumbermu1").innerHTML = d;
document.getElementById("arioperatormu").innerHTML = "*";
document.getElementById("arinumbermu2").innerHTML = e;

document.getElementById("ariBtnmu").onclick = function () {
 let f = d * e;
 document.getElementById("ariresultmu").innerHTML = f;
}

document.getElementById("ariResetmu").onclick = function () {
 document.getElementById("ariresultmu").innerHTML = "";
}

// Arithmetic Operators /

let g = 600;
let h = 3;

document.getElementById("arinumberd1").innerHTML = g;
document.getElementById("arioperatord").innerHTML = "/";
document.getElementById("arinumberd2").innerHTML = h;

document.getElementById("ariBtnd").onclick = function () {
 let i = g / h;
 document.getElementById("ariresultd").innerHTML = i;
}

document.getElementById("ariResetd").onclick = function () {
 document.getElementById("ariresultd").innerHTML = "";
}


//Arithmetic Operators %

let j = 700;
let k = 3;

document.getElementById("arinumbermo1").innerHTML = j;
document.getElementById("arioperatormo").innerHTML = "%";
document.getElementById("arinumbermo2").innerHTML = k;

document.getElementById("ariBtnmo").onclick = function () {
 let l = j % k;
 document.getElementById("ariresultmo").innerHTML = l;
}

document.getElementById("ariResetmo").onclick = function () {
 document.getElementById("ariresultmo").innerHTML = "";
}


//Arithmetic Operator(++) 

let m = 50;
document.getElementById("arinumberin1").innerHTML = m;
document.getElementById("arioperatorin").innerHTML =  "++ --";
document.getElementById("arinumberin2").innerHTML = "50+1+1+1..";

document.getElementById("ariBtnin").onclick = function(){
 m++;
 document.getElementById("ariresultin").innerHTML = m;
}

document.getElementById("ariDecrease").onclick = function(){
 m--;
 document.getElementById("ariresultin").innerHTML = m;
}

document.getElementById("ariResetin").onclick = function(){
 document.getElementById("ariresultin").innerHTML = "";
}



