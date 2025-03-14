function toggleLetter() {
    const letter = document.getElementById('letter');
    const envelope = document.getElementById('envelope');

    if (letter.style.display === "none" || letter.style.display === "") {
        letter.style.display = "block";
        envelope.style.display = "none";
        index = 0; // Đặt lại chỉ số
        typeLetter(); // Bắt đầu gõ chữ
    } else {
        letter.style.display = "none";
        envelope.style.display = "block";
        // Chuyển hướng đến trang gallery.html
        setTimeout(() => {
            window.location.href = 'gallery.html';
        }, 1000); // Thời gian chờ 1 giây trước khi chuyển trang
    }
}