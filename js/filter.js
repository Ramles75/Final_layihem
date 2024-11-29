const jsonUrl = './products.json';
const allFilterBtns = document.querySelectorAll('.filter-btn');
const productBase = document.querySelector(".productBase");

window.addEventListener('DOMContentLoaded', () => {

});

allFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        fetchProducts().then(products => {
            const filteredProducts = products.filter(product =>
                product.category === category
            );
            clearProducts();
            displayProducts(filteredProducts);
        });
        setActiveBtn(btn); 
    });
});

async function fetchProducts() {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error('JSON verisi alınamadı.');
        return await response.json();
    } catch (error) {
        console.error('Hata:', error);
        return [];
    }
}

function displayProducts(products) {
    if (products.length === 0) {
        productBase.innerHTML = `<p>No products found.</p>`;
        return;
    }
    products.forEach(product => {
        const productHTML = `
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="${product.image}" alt="${product.category}">
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h5 class="p-name">${product.name}</h5>
                <h4>${product.price}</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
        `;
        productBase.insertAdjacentHTML('beforeend', productHTML);
    });
}

function clearProducts() {
    productBase.innerHTML = '';
}

function setActiveBtn(activeBtn) {
    allFilterBtns.forEach(btn => btn.classList.remove('active-btn'));
    activeBtn.classList.add('active-btn');
}
