// var postAPI = "https://jsonplaceholder.typicode.com/posts";

// fetch(postAPI)
//     .then((response) => {
//     return response.json();
// })
//     .then((posts) => {
//         var htmls = posts.map((post) => {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`
//         });
//         var result = htmls.join('');
//         document.getElementById('post-block').innerHTML = result;
//     })
//     .catch((err) => {
//         console.log("Error!!!")
//     })



var postsApi = 'https://jsonplaceholder.typicode.com/posts';

var usersApi = 'https://jsonplaceholder.typicode.com/users';

Promise.all([
    fetch(postsApi).then(response => response.json()),
    fetch(usersApi).then(response => response.json())
])

.then(([posts, users]) => {
    var userIds = posts.map(p => p.userId);
    users = users.filter(u => userIds.includes(u.id));

    var postHtmls = posts.map(post => {
        user = users.find(u => u.id === post.userId);

        return `
            <li>
                <h2 className="title">${post.title}</h2>
                <h4 className="user">${user.name}</h4>
                <p className="content">${post.body}</p>
            </li>
        `;
    });
    var viewHtml = postHtmls.join('');
    document.getElementById('cmt-block').innerHTML = viewHtml;
})
.catch((err) => {
    document.body.innerHTML = err;
})


