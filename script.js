const products = [
    {
      name: "pantalla plana alta resolucion ",
      description: "pantalla de alta definicio y con mucha durabilidad ",
      image: "images/product1.jpg",
      price: 99.99,
      available: true
    },
    {
      name: "monitor lg 4k pc",
      description: "monitor para pc de buena calidad y buena resolucion ",
      image: "images/product2.jpg",
      price: 149.99,
      available: true
    },
    {
      name: "televisor lg ",
      description: "producto alta definicion ",
      image: "images/product2.jpg",
      price: 79.99,
      available: true
    },
    // Agrega más productos aquí...
  ];
  
  function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      if (product.available) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
  
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productCard.appendChild(productImage);
  
        const productName = document.createElement("h2");
        productName.textContent = product.name;
        productCard.appendChild(productName);
  
        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productCard.appendChild(productDescription);
  
        const productPrice = document.createElement("p");
        productPrice.textContent = "Precio: $" + product.price.toFixed(2);
        productCard.appendChild(productPrice);
  
        productList.appendChild(productCard);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    renderProducts();
  });


  document.addEventListener("DOMContentLoaded", function() {
    const addProductButton = document.getElementById("add-product-button");
  
    addProductButton.addEventListener("click", function() {
      window.open("formulario.html", "_blank", "width=500,height=500");
    });
  });