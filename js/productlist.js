
const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");


const url=`https://kea-alt-del.dk/t7/api/products?limit=50`;




fetch(url)
    .then(function(res){
        return res.json();

    })

    .then(function(data){
        handleProductList(data);

    })

    function handleProductList(data){ 
       // console.log(data);

       data.forEach(showProduct);

    }

 

    function showProduct(product){ 
        const template = document.querySelector("#smallProductTemplate").content;

        const copy = template.cloneNode(true);

        copy.querySelector(".subtle").textContent =`${product.articletype} | ${product.brandname}`;

        copy.querySelector("h3").textContent =product.productdisplayname;

        copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

        if(product.soldout){  
            copy.querySelector("article").classList.add("soldout");
            copy.querySelector(".availability").textContent= `SOLD OUT`;
            
        }         
        else { 
            copy.querySelector("article").classList.remove("soldout");
            copy.querySelector(".availability").textContent= `Available`;
        }

        copy.querySelector("a").href=`product.html?id=${product.id}`;

        if(product.discount){  
            copy.querySelector("div").classList.add("discounted");
            
        }         
        else { 
            copy.querySelector("div").classList.remove("discounted");
            copy.querySelector("p:nth-child(2)").remove();
        }

        copy.querySelector("div p").textContent=`DKK ${product.price}`;
        // copy.querySelector("div p:nth-child(2)").textContent=`${product.discount} %`;

      

        const parent = document.querySelector("main");

        parent.appendChild(copy);
 
     }