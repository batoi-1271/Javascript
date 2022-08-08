const button = document.querySelector('.button');


// mousemove, mouseover,mouseenter, mouseleave

// // mousemove 
// button.addEventListener('mousemove', function(e) {
//   console.log("mousemove")
// })

// // mouseover : chạy khi di chuột vào phần tử và con của ptu
// button.addEventListener('mouseover', function(e) {
//   console.log("mouseover")
// })

// mouseenter : chạy khi di chuột vào phần tử không tính phần tử con
// button.addEventListener('mouseenter', function(e) {
//   console.log("mouseenter")
// })

// // mouseleave : chạy khi di chuột ra ngoài phần tử
// button.addEventListener('mouseleave', function(e) {
//   console.log("mouseleave")
// })

// Toạ độ di chuyển chuột

// pageX, pageY, clientX, clientY
document.addEventListener('mousemove', function(e) {
  // console.log(`pageX: ${e.pageX}`);
  // console.log(`ClientX: ${e.clientX}`);

  // clientY: lấy toạ độ theo viewport
  // pageY: lấy toạ độ theo document

  // X ngang 
  // Y dọc
  console.log(`pageY: ${e.pageY}`);
  console.log(`ClientY: ${e.clientY}`);


})