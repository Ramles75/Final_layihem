document.getElementById("contactForm").addEventListener("submit", (e) => {
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