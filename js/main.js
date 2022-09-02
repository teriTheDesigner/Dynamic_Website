
const url="https://kea-alt-del.dk/t7/api/seasons";

fetch(url)
.then(function(res){
    return res.json();

})

.then(function(data){
    goThroughEach(data);

})

function goThroughEach(data){ 
   console.log(data);

   data.forEach(showBrand);

}

function showBrand(oneBrand){

    const template = document.querySelector("#CategoryTemplate").content;

    const copy = template.cloneNode(true);

    copy.querySelector("a").textContent = oneBrand.brandname;
    copy.querySelector("a").href = `productlist.html?seasons= Spring`;
  

    const parent = document.querySelector("main");

    parent.appendChild(copy);



}

