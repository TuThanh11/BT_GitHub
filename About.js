// about.js

// Hiệu ứng đổi lời chúc Noel
const messages = [
    "🎄 Merry Christmas!",
    "🎅 Chúc bạn học code thật vui!",
    "✨ Code sạch – điểm cao!",
    "🎁 Thành công trong mùa Giáng Sinh!"
];

let index = 0;

function changeMessage() {
    const msgEl = document.getElementById("christmas-message");
    if (msgEl) {
        msgEl.textContent = messages[index];
        index = (index + 1) % messages.length;
    }
}

setInterval(changeMessage, 3000);

// Click cây thông sẽ đổi màu nền
document.addEventListener("DOMContentLoaded", () => {
    const tree = document.getElementById("tree");
    tree.addEventListener("click", () => {
        document.body.style.background =
            "linear-gradient(135deg, #006400, #b30000)";
    });
});
