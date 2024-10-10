window.onload = function() {
    const form = document.getElementById('signup-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);

            let message ='You have successfully registered for monthly Youth Events. Click "OK" if the following information is correct. Thank you!\n';
            for (let pair of formData.entries()) {
                message += `${pair[0]}: ${pair[1]}\n`;
            }
            console.log(message)
            alert(message);
        });
    }
};