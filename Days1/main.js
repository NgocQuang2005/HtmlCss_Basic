var listMenu = document.querySelectorAll(".menu-item"); // lấy ra các thẻ li là menu , lấy theo class của nó , chú ý dấu chấm , cỏ thể viết là li , nma tránh nó sẽ làm lỗi vì trên 1 trang web có thể có nhiều thẻ li ...
console.log(listMenu); // console ra cho chắc để kiểm tra nó lấy đúng chưa
// lặp qua để lấy ra các thẻ li ở trong
listMenu.forEach(function (item) {
  // console.log(index);
  // kiểm tra xem nó có lấy đúng đoạn text trong class đó của mình hay kh , bằng tham số đã khởi tạo là item.innerText
  console.log(item.innerText);
  // bắt sự kiện
  item.addEventListener("click", function () {
    //lặp 1 lần nữa để xóa các thẻ li có chứa class active vì trên trang web các menu khi click vào menu nào thì menu đó dc active lên
    listMenu.forEach(function (el) {
      el.classList.remove("active");
    });
    // khi đã xóa các thẻ li khác thì thẻ li dc click sẽ được thêm class active
    item.classList.add("active");
  });
});
