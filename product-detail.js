// 1. Xử lý Thư viện ảnh (Gallery)
function changeImage(element) {
    const newSrc = element.src;
    const mainImg = document.getElementById('currentImg');

    // Hiệu ứng mờ đi rồi hiện lại
    mainImg.style.opacity = 0.5;
    setTimeout(() => {
        mainImg.src = newSrc;
        mainImg.style.opacity = 1;
    }, 150);

    // Active class cho thumbnail
    document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

// 2. Xử lý chọn Màu sắc
function selectColor(element) {
    document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');

    const colorName = element.getAttribute('data-color');
    document.getElementById('selected-color-text').innerText = colorName;
}

// 3. Xử lý chọn Size
function selectSize(element) {
    document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
}

// 4. Mở bảng size khi click link
function openSizeChart() {
    const sizeDetails = document.getElementById('size-chart-details');
    if (sizeDetails) {
        sizeDetails.open = true;
        sizeDetails.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

// 5. Xử lý Số lượng
const qtyInput = document.getElementById('qtyInput');

function increaseQty() {
    let currentQty = parseInt(qtyInput.value);
    qtyInput.value = currentQty + 1;
}

function decreaseQty() {
    let currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
    }
}

// 6. Xử lý nút Mua
document.querySelector('.btn-buy-now').addEventListener('click', () => {
    const size = document.querySelector('.size-option.selected').innerText;
    const color = document.querySelector('.color-option.selected').getAttribute('data-color');
    const qty = qtyInput.value;
    const name = document.querySelector('.product-title').innerText;

    alert(`XÁC NHẬN MUA NGAY:\n- SP: ${name}\n- Màu: ${color}\n- Size: ${size}\n- Số lượng: ${qty}`);
});

document.querySelector('.btn-add-cart').addEventListener('click', () => {
    alert("Đã thêm vào giỏ hàng!");
});