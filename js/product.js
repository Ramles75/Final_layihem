const dataBase = document.querySelector(".productBase");
const paymentModal = document.getElementById("paymentModal");
const closeBtn = document.querySelector(".close");


const initApp = () => {
    fetch('./products.json')
        .then(response => response.json())
        .then(products => {
            dataBase.innerHTML = null;
            products.forEach(product => {
                dataBase.innerHTML += `
                    <div class="product text-center col-lg-3 col-md-4 col-12" data-id="${product.id}">
                        <img class="img-fluid mb-3" src="${product.image}" alt="food-photo">
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
            });
        })
        .catch(error => console.error('Hata:', error));
};

dataBase.addEventListener('click', (event) => {
    if (event.target.closest('.buy-btn')) {
        paymentModal.style.display = "block";
        document.body.classList.add("modal-open");
    }
});

closeBtn.onclick = function () {
    paymentModal.style.display = "none";
    document.body.classList.remove("modal-open");
};

initApp();
document.querySelector(".paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment Success",
        showConfirmButton: false,
        timer: 2500
    });
    paymentModal.style.display = "none";
    document.body.classList.remove("modal-open");
})