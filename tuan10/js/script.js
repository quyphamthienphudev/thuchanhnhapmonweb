// Khởi tạo EmailJS
(function () {
    emailjs.init("YDdwZaLx10yzVY25p");
})();


// Bắt sự kiện click button
document
    .getElementById("form")
    .addEventListener("submit", function (event) {

        // Ngăn reload trang lại
        event.preventDefault();

        // Lấy email từ input
        const email = document.getElementById("email").value;

        // Dữ liệu gửi đi
        var templateParams = {
            email: email,
        };

        // Gửi email
        emailjs.send(
            "service_ifkakf3",
            "template_v63iscl",
            templateParams
        ).then(
            function (response) {
                alert("Đăng ký thành công!");

            },
            function (error) {

                alert("Gửi thất bại!");
            }
        );

    });

// Phúc Thịnh: Code xử lý chức năng bình luận [Simple comment handling (client-side only)]
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    if (!name || !comment) return;
    const li = document.createElement('li');
    li.className = 'mb-3 p-3 bg-light rounded border-start border-4 border-danger';
    li.innerHTML = `<strong>${name}</strong><p class="mb-0 mt-1">${comment}</p>`;
    document.getElementById('comments').prepend(li);
    this.reset();
});