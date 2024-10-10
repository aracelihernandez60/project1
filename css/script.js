window.onload = function() {
    const form = document.getElementById('signup-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);