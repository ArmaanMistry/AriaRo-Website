document.getElementById("openPopup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

document.getElementById("popup").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()