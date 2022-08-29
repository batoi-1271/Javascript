// ?limit=8 : giới hạn số ảnh lấy ra là 8
// https://picsum.photos/v2/list ==> LINK API

const imageList = document.querySelector('.images')
const loadMore = document.querySelector('.load-more')
loadMore.style.display = 'none'
let images = [];
let page = 1;
const limit = 8;
const endPoint = `https://picsum.photos/v2/list?limit=${limit}`
const loading = document.querySelector('.image-loader');

function templateImg(url) {
    const template = `<div class="image-item">
        <img src="${url}" alt="">
        </div>`;
        imageList.insertAdjacentHTML('beforeend', template)
}

async function fecthImage(page = 1) {
    loading.style.display = "block";
    loadMore.style.display = "none";

    const response = await fetch(`${endPoint}&page=${page}`);
    images = await response.json();
    if (images.length > 0 && Array.isArray(images)) {
        loading.style.display = "none";
        loadMore.style.display = "block";

        images.forEach(image => {
            templateImg(image.download_url)
        })
    }
}

async function handleLoadMore() {
    page++;
    await fecthImage(page)
}
loadMore.addEventListener('click', handleLoadMore);
fecthImage()