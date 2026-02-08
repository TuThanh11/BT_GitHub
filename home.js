// Load trang chủ khi vào
window.addEventListener('load', function() {
    // Lấy thông tin người dùng (nếu đã đăng nhập)
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Hiển thị tên người dùng hoặc tên mặc định
    if (currentUser) {
        document.getElementById('userName').textContent = `Chào, ${currentUser.name}`;
    } else {
        document.getElementById('userName').textContent = `Chào, bạn`;
    }
});