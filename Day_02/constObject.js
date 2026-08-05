//Constant Objects


const carBrandDetails = {
  BrandName: "Toyota",
  ModelName: "Corolla",
  MadeIn: "Japan",
  CorporationSince: "1966. Since 1997",
  BestSelling: "automobile nameplate of all time",
};

document.getElementById("constobject").innerHTML = `
  <h3>Car Brand Details</h3>
  <p><b>Brand Name:</b> ${carBrandDetails.BrandName}</p>
  <p><b>Model Name:</b> ${carBrandDetails.ModelName}</p>
  <p><b>Made In:</b> ${carBrandDetails.MadeIn}</p>
  <p><b>Corporation Since:</b> ${carBrandDetails.CorporationSince}</p>
  <p><b>Best Selling:</b> ${carBrandDetails.BestSelling}</p>
`;

//change a property
carBrandDetails.ModelName =  "Camry";
carBrandDetails.CorporationSince =  "1982";


document.getElementById("changeobject").innerHTML = `
  <h3>2 Details Changed</h3>
  <p><b>Brand Name:</b> ${carBrandDetails.BrandName}</p>
  <p style="color:red;"><b>Model Name:</b> ${carBrandDetails.ModelName}</p>
  <p><b>Made In:</b> ${carBrandDetails.MadeIn}</p>
  <p style="color:red;"><b>Corporation Since:</b> ${carBrandDetails.CorporationSince}</p>
  <p><b>Best Selling:</b> ${carBrandDetails.BestSelling}</p>
`;

//add a property
carBrandDetails.DYNA = "DYNA – 2023";
carBrandDetails.price = "৳ 3,450,000.00";

document.getElementById("addobject").innerHTML = `
  <h3>2 Details Add</h3>
  <p><b>Brand Name:</b> ${carBrandDetails.BrandName}</p>
  <p style="color:red;"><b>Model Name:</b> ${carBrandDetails.ModelName}</p>
  <p><b>Made In:</b> ${carBrandDetails.MadeIn}</p>
  <p style="color:red;"><b>Corporation Since:</b> ${carBrandDetails.CorporationSince}</p>
  <p><b>Best Selling:</b> ${carBrandDetails.BestSelling}</p>
  <p style="color:green;"><b>New Model:</b> ${carBrandDetails.DYNA}</p>
  <p style="color:green;"><b>BD Price:</b> ${carBrandDetails.price}</p>
`;


