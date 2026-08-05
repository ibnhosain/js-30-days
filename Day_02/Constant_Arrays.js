

//constant array

const carMarketBrands = [ "Toyota", "Honda" , "Ford", "Chevrolet", "Hyundai" ];

document.getElementById("constArry").innerHTML = "<b>carMarketBrands:</b> " + carMarketBrands;




carMarketBrands[1] = "Nissan"; //change an element

document.getElementById("ArryChange").innerHTML ="<b>change  One Brand :</b> " + carMarketBrands;

  


carMarketBrands.push("Volkswagen", "Subaru", "Kia", "Mazda"); //add an element

document.getElementById("ArryAdd").innerHTML = "<b>Add New Brand :</b> "+ carMarketBrands;




