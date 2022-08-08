
const progress = document.querySelector('.progress');

console.log(progress)
window.addEventListener('scroll', function(e) {

    // Khoảng cách của scrollBar so với phía trên khi scroll
    const scrollTop = window.pageYOffset;

    // Tính ra chiều cao của scrollBar
    const heightDoc = 
    // Chiều cao của document bao gồm scrollBar (scrollHeight)
    document.documentElement.scrollHeight - 
    // Chiều cao của document KHÔNG bao gồm scrollBar (clientHeight)
    document.documentElement.clientHeight;

    const width = (scrollTop / heightDoc) * 100;
     progress.style.width = `${width}%`;
});