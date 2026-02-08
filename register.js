// Form elements
const form = document.getElementById('registerForm');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const termsCheckbox = document.getElementById('terms');
const successMessage = document.getElementById('successMessage');

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
    confirmPasswordInput.type = type;
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Validate email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validate phone
function isValidPhone(phone) {
    const regex = /^(0|\+84)[0-9]{9,10}$/;
    return regex.test(phone.replace(/\s/g, ''));
}

// Check password strength
function checkPasswordStrength(password) {
    const strengthBar = document.getElementById('passwordStrengthBar');
    const strengthContainer = document.getElementById('passwordStrength');
    
    if (password.length === 0) {
        strengthContainer.classList.remove('show');
        return 0;
    }

    strengthContainer.classList.add('show');
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    strengthBar.className = 'password-strength-bar';
    
    if (strength <= 2) {
        strengthBar.classList.add('weak');
        return 1;
    } else if (strength === 3) {
        strengthBar.classList.add('medium');
        return 2;
    } else {
        strengthBar.classList.add('strong');
        return 3;
    }
}

// Show error
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Hide error
function hideError(input, errorElement) {
    input.classList.remove('error');
    errorElement.classList.remove('show');
}

// Password strength indicator
passwordInput.addEventListener('input', function() {
    checkPasswordStrength(this.value);
    if (this.value) {
        hideError(passwordInput, document.getElementById('passwordError'));
    }
});

// Real-time validation
fullnameInput.addEventListener('blur', function() {
    if (!this.value.trim()) {
        showError(fullnameInput, document.getElementById('fullnameError'), 'Vui lòng nhập họ và tên');
    } else {
        hideError(fullnameInput, document.getElementById('fullnameError'));
    }
});

emailInput.addEventListener('blur', function() {
    if (!isValidEmail(this.value)) {
        showError(emailInput, document.getElementById('emailError'), 'Vui lòng nhập email hợp lệ');
    } else {
        hideError(emailInput, document.getElementById('emailError'));
    }
});

phoneInput.addEventListener('blur', function() {
    if (!isValidPhone(this.value)) {
        showError(phoneInput, document.getElementById('phoneError'), 'Vui lòng nhập số điện thoại hợp lệ');
    } else {
        hideError(phoneInput, document.getElementById('phoneError'));
    }
});

confirmPasswordInput.addEventListener('input', function() {
    if (this.value && this.value !== passwordInput.value) {
        showError(confirmPasswordInput, document.getElementById('confirmPasswordError'), 'Mật khẩu không khớp');
    } else {
        hideError(confirmPasswordInput, document.getElementById('confirmPasswordError'));
    }
});

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;

    // Validate fullname
    if (!fullnameInput.value.trim()) {
        showError(fullnameInput, document.getElementById('fullnameError'), 'Vui lòng nhập họ và tên');
        isValid = false;
    } else {
        hideError(fullnameInput, document.getElementById('fullnameError'));
    }

    // Validate email
    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, document.getElementById('emailError'), 'Vui lòng nhập email hợp lệ');
        isValid = false;
    } else {
        hideError(emailInput, document.getElementById('emailError'));
    }

    // Validate phone
    if (!isValidPhone(phoneInput.value)) {
        showError(phoneInput, document.getElementById('phoneError'), 'Vui lòng nhập số điện thoại hợp lệ');
        isValid = false;
    } else {
        hideError(phoneInput, document.getElementById('phoneError'));
    }

    // Validate password
    const passwordStrength = checkPasswordStrength(passwordInput.value);
    if (passwordStrength < 2) {
        showError(passwordInput, document.getElementById('passwordError'), 'Mật khẩu chưa đủ mạnh');
        isValid = false;
    } else {
        hideError(passwordInput, document.getElementById('passwordError'));
    }

    // Validate confirm password
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, document.getElementById('confirmPasswordError'), 'Mật khẩu không khớp');
        isValid = false;
    } else {
        hideError(confirmPasswordInput, document.getElementById('confirmPasswordError'));
    }

    // Validate terms
    if (!termsCheckbox.checked) {
        alert('Vui lòng đồng ý với điều khoản dịch vụ');
        isValid = false;
    }

    if (isValid) {
        // Simulate successful registration
        const userData = {
            fullname: fullnameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            password: passwordInput.value
        };

        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        // Show success message
        successMessage.classList.add('show');

        // Reset form
        form.reset();
        document.getElementById('passwordStrength').classList.remove('show');

        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
});

// Social login functions
function loginWithGoogle() {
    alert('Tính năng đăng nhập Google đang được phát triển');
}

function loginWithFacebook() {
    alert('Tính năng đăng nhập Facebook đang được phát triển');
}