// get posts and comments


async function getUserAsync(url) {
    try {
        let response = await fetch(url);
        let data = await response.json()
        return data;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }


}

// render posts
getUserAsync('https://jsonplaceholder.typicode.com/posts')
    .then(data => renderPosts(data));



function renderPosts(users) {
    users.forEach(user => {
        const liUsers = document.createElement('li');
        liUsers.textContent = user.body;
        document.body.appendChild(liUsers);
        liUsers.classList.add(
            "list-group-item",
            "d-flex",
            "align-items-center",
            "flex-wrap"
        );
    });
}
// render comments

getUserAsync('https://jsonplaceholder.typicode.com/comments')
    .then(data => renderComments(data));

function renderComments(users) {
    users.forEach(user => {
        const liComments = document.createElement('li');
        liComments.textContent = user.name;
        document.body.appendChild(liComments);
        liComments.classList.add(
            "list-group-item",
            "d-flex",
            "align-items-center",
            "flex-wrap"
        );
    });
}
// ///в закоменнтированном коде все рендерит на страницу, но сначала грузит посты, потом комменты
// // пыталась их как-то объединить по id
// function http() {
//     return {
//         async request(url) {
//             const response = await fetch(url)
//             if (!response.ok) {
//                 return Promise.reject(response);
//             }
//             const data = await response.json();
//             return data
//         }
//     }
// }
// const myHttp = http();
// async function getUserAsync(id) {
//     try {
//         let [post, comment] = await Promise.all([
//             myHttp.request(`https://jsonplaceholder.typicode.com/posts/${id}`),
//             myHttp.request(`https://jsonplaceholder.typicode.com/comments/${id}`),


//         ]);

//         return { post, comment }
//     } catch (err) {
//         console.log(err);
//         return Promise.reject(err);
//     }

// }
// for (let id = 1; id < 50; id++) { // есть чутье, что так не делают, но не знала, как еще объединить комменты по id)
//     getUserAsync(id)
//         .then(value => renderPosts(value)) // не рендерит

//     .catch(err => console.log(err));
// }

// function renderPosts(users) {
//     users.forEach(user => {
//         const liUsers = document.createElement('li');
//         liUsers.textContent = user.body;
//         document.body.appendChild(liUsers);
//         liUsers.classList.add(
//             "list-group-item",
//             "d-flex",
//             "align-items-center",
//             "flex-wrap"
//         );
//     });
// }