

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

console.log(id);

const url=`https://kea-alt-del.dk/t7/api/products/${id}`;



fetch(url)
    .then((res)=>res.json())
    .then((data) => showProduct(data));

    function showProduct(product) {
        console.log(product);
        document.querySelector(".purchaseBox .productName").textContent=product.productdisplayname;
        document.querySelector(".purchaseBox .articletype").textContent=product.articletype;
        document.querySelector(".purchaseBox .price").textContent= `DKK ${product.price}`;
        document.querySelector(".info .productName").textContent= product.productdisplayname;
        document.querySelector(".info .usage").textContent=product.usagetype;
        document.querySelector(".info .brand").textContent=product.brandname;


document.querySelector("img.productimage").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

document.querySelector("img.productimage").alt=product.productdisplayname;


}

