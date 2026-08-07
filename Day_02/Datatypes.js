
//String

let name = "Abu Abdillah"

document.getElementById("stringName").innerHTML = "String";
document.getElementById("stringOutput").innerHTML = name ;
document.getElementById("stringType").innerHTML = typeof name;


//Number

let age = 27;

document.getElementById("numberName").innerHTML = "Number";
document.getElementById("numberOutput").innerHTML = age ;
document.getElementById("numberType").innerHTML = typeof age;


//BigInt

let starsInGalaxy = 2251354000000000000n;

document.getElementById("bigintName").innerHTML = "BigInt";
document.getElementById("bigintOutput").innerHTML = starsInGalaxy ;
document.getElementById("bigintType").innerHTML = typeof starsInGalaxy;


//Boolean

let x = 40;
let y = 50;
let z = x < y;

document.getElementById("booleanName").innerHTML = "Boolean";
document.getElementById("booleanOutput").innerHTML = z;
document.getElementById("booleanType").innerHTML = typeof z;

let a = 40;
let b = 50;
let c = b < a;

document.getElementById("booleanfName").innerHTML = "Boolean";
document.getElementById("booleanfOutput").innerHTML = c;
document.getElementById("booleanfType").innerHTML = typeof c;

//Object

let book = {
 Name: "Learn Javascript",
 Author : "Arif Mahmud",
 Publisher: "Green mart"
}

document.getElementById("objectName").innerHTML = "Object";
document.getElementById("objectOutput").innerHTML =
book.Name + "<br>" +
book.Author + "<br>" +
book.Publisher;

document.getElementById("objectType").innerHTML = typeof book;

//Undefined
let v ;

document.getElementById("undefinedName").innerHTML = "Undefined";
document.getElementById("undefinedOutput").innerHTML = v;
document.getElementById("undefinedType").innerHTML = typeof v;



//Null
let flower = null;

document.getElementById("nullName").innerHTML = "Null";
document.getElementById("nullOutput").innerHTML = String(flower);
document.getElementById("nullType").innerHTML = typeof flower;


//Symbol

let nid = Symbol("id");

document.getElementById("symbolName").innerHTML = "Symbol";
document.getElementById("symbolOutput").innerHTML = String(nid);
document.getElementById("symbolType").innerHTML = typeof nid;