
window.addEventListener("load", function () {
    const input = document.querySelector(".input-search");
    const items = document.querySelectorAll(".dropdown-item");
    
    input.addEventListener("input", handleHighlight);
    // input nó sẽ lấy value(Giá trị) mỗi khi chúng ta gõ
    function handleHighlight(e) {
      let filter = e.target.value;
      filter = filter.toLowerCase();
      [...items].forEach((item) => {
        const text = item.textContent;
        const index = text.toLowerCase().indexOf(filter);
        if (index >= 0 && text.toLowerCase().includes(filter)) {
          item.innerHTML = `${text.substring(
            0,
            index
          )}<span class="primary">${text.substring(
            index,
            index + filter.length
          )}</span>${text.substring(index + filter.length)}`;
        } else {
          item.innerHTML = "";
        }
      });
    }
  });


  // Scroll events
  window.addEventListener("scroll", 
    debounce(function (e) {
        console.log("Scroll event")
  }, 50))
/*
  Debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi.
  Trong khoảng thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất một
  hành động diễn ra trong thời gian chúng ta định trước.
 */
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, 
        args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};