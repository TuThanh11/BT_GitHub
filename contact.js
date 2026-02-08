const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }

    successMessage.textContent = 'Gửi liên hệ thành công! Cảm ơn bạn ❤️';
    form.reset();
});