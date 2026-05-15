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