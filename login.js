// Danh sách tài khoản mẫu (trong thực tế nên lưu trên server)
const accounts = [
    { username: 'admin', password: '123456', name: 'Admin' },
    { username: 'user1', password: '123456', name: 'Nguyễn Văn A' },
    { username: 'user2', password: '123456', name: 'Trần Thị B' }
];

// Lấy các elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Xử lý submit form
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    hideError(usernameError);
    hideError(passwordError);
    
    // Lấy giá trị input
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Validate
    let isValid = true;
    
    if (username === '') {
        showError(usernameError, 'Vui lòng nhập tên đăng nhập');
        isValid = false;
    }
    
    if (password === '') {
        showError(passwordError, 'Vui lòng nhập mật khẩu');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Kiểm tra đăng nhập
    const user = accounts.find(acc => 
        acc.username === username && acc.password === password
    );
    
    if (user) {
        // Đăng nhập thành công
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert(`Đăng nhập thành công! Xin chào ${user.name}`);
        
        // Chuyển sang trang chính (nếu có)
        // window.location.href = 'index.html';
        
        // Hoặc hiển thị thông báo
        loginForm.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #27ae60; margin-bottom: 10px;">✓ Thành công!</h2>
                <p>Chào mừng <strong>${user.name}</strong></p>
                <button onclick="logout()" style="margin-top: 20px; background: #e74c3c;">
                    Đăng xuất
                </button>
            </div>
        `;
    } else {
        // Đăng nhập thất bại
        showError(passwordError, 'Tên đăng nhập hoặc mật khẩu không đúng');
        passwordInput.value = '';
        passwordInput.focus();
    }
});

// Hàm hiển thị lỗi
function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
}

// Hàm ẩn lỗi
function hideError(element) {
    element.classList.remove('show');
}

// Xóa lỗi khi người dùng bắt đầu nhập
usernameInput.addEventListener('input', function() {
    hideError(usernameError);
});

passwordInput.addEventListener('input', function() {
    hideError(passwordError);
});

// Hàm đăng xuất
function logout() {
    localStorage.removeItem('currentUser');
    location.reload();
}

// Kiểm tra đã đăng nhập chưa khi load trang
window.addEventListener('load', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        loginForm.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #27ae60; margin-bottom: 10px;">Đã đăng nhập</h2>
                <p>Xin chào <strong>${user.name}</strong></p>
                <button onclick="logout()" style="margin-top: 20px; background: #e74c3c;">
                    Đăng xuất
                </button>
            </div>
        `;
    }
});