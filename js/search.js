document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    let products = []; 
    let isSearchBarVisible = false; 

    fetch('./products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("JSON dosyası yüklenirken bir hata oluştu");
            }
            return response.json();
        })
        .then(data => {
            products = data;
        })
        .catch(error => {
            console.error("Hata:", error);
        });

    searchIcon.addEventListener("click", () => {
        isSearchBarVisible = !isSearchBarVisible; 
        if (isSearchBarVisible) {
            searchBar.style.display = "block";
            searchInput.value = ""; 
            searchResults.innerHTML = ""; 
        } else {
            searchBar.style.display = "none";
        }
    });


    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query)
            );

            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const resultItem = document.createElement("div");
                    resultItem.classList.add("search-result-item");

                
                    const productImage = document.createElement("img");
                    productImage.src = product.image;
                    productImage.alt = product.name;

                
                    const productDetails = document.createElement("div");
                    productDetails.classList.add("details");

                    const productName = document.createElement("div");
                    productName.classList.add("name");
                    productName.textContent = product.name;

                    const productPrice = document.createElement("div");
                    productPrice.classList.add("price");
                    productPrice.textContent = product.price;

                    productDetails.appendChild(productName);
                    productDetails.appendChild(productPrice);

                    resultItem.appendChild(productImage);
                    resultItem.appendChild(productDetails);

                    searchResults.appendChild(resultItem);
                });
            } else {
                searchResults.textContent = "No results found";
            }
        }
    });
});
