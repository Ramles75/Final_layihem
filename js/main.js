const buyBtn = document.getElementsByClassName("buy-btn");
const paymentModal = document.getElementById("paymentModal");
const closeBtn = document.querySelector(".close");
const payButton = document.querySelector(".payButton");
console.log(buyBtn);

for (let index = 0; index < buyBtn.length; index++) {
    const element = buyBtn[index];
    element.addEventListener('click',()=>{
        paymentModal.style.display = "block";
        document.body.classList.add("modal-open"); 
    })
}
if (closeBtn) {  

    closeBtn.onclick = function () {

        paymentModal.style.display = "none";
        document.body.classList.remove("modal-open"); 
    };
}
if (payButton) {  

    payButton.addEventListener('click',()=>{
       
    })
}
document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const cardNumber = document.getElementById("cardNumber");
    const expMonth = document.getElementById("expMonth");
    const expYear = document.getElementById("expYear");
    const cvv = document.getElementById("cvv");


    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const addressError = document.getElementById("addressError");
    const cardNumberError = document.getElementById("cardNumberError");
    const cardInfoError = document.getElementById("cardInfoError");

    let isValid = true;

    if (name.value.trim() === "" || name.value.length < 3) {
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    if (!phone.value.length > 0) {
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    if (address.value.trim() === "") {
        isValid = false;
    } else {
        addressError.style.display = "none";
    }

    if (!cardNumber.value.match(/^\d{8}$/)) {
        isValid = false;
    } else {
        cardNumberError.style.display = "none";
    }

    if (!expMonth.value.match(/^\d{2}$/) || !expYear.value.match(/^\d{2}$/) || !cvv.value.match(/^\d{3}$/)) {
    isValid = false;
    } else {
        cardInfoError.style.display = "none";
    }

    if (isValid) {
       
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: false,
            timer: 2500
          });
          paymentModal.style.display = "none";
          document.body.classList.remove("modal-open");
          expMonth.value = ""
          expYear.value = ""
          cardNumber.value = ""
          address.value = ""
          phone.value = ""
          name.value = ""
    }
});

document.getElementById("contactForm").addEventListener("submit",  (e) =>{
    e.preventDefault(); 
    e.target.reset()
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Message Sent",
        showConfirmButton: false,
        timer: 2500
      });
})