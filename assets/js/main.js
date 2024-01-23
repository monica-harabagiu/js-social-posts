const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const containerHtml = document.getElementById("container")


posts.forEach((element) => {

    containerHtml.innerHTML += `<div class="post">
                                    <div class="post__header">
                                        <div class="post-meta">
                                            <div class="post-meta__icon">
                                                <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">
                                            </div>
                                            <div class="post-meta__data">
                                                <div class="post-meta__author">${element.author.name}</div>
                                                <div class="post-meta__time">${element.created}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post__text">${element.content}</div>
                                    <div class="post__image">
                                        <img src="${element.media}" alt="">
                                    </div>
                                    <div class="post__footer">
                                        <div class="likes js-likes">
                                            <div class="likes__cta">
                                                <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                    <span class="like-button__label">Mi Piace</span>
                                                </a>
                                            </div>
                                            <div class="likes__counter">
                                                Piace a <b id="${element.id}" class="js-likes-counter">${element.likes}</b> persone
                                            </div>
                                        </div>
                                    </div>
                                </div>`


})




const likeButtons = document.querySelectorAll('.js-like-button')
console.log(likeButtons)

const likedPosts = []

likeButtons.forEach(element => {

    element.addEventListener("click", function(){

        event.preventDefault()

        const postId = this.dataset.postid
        console.log(postId)

        const post = posts.find(post => post.id == postId)

        const isLiked = !post.liked
        post.liked = isLiked

        console.log(post.liked)

        const likeButtonLabel = this.querySelector('.like-button__label')
        const likeButtonIcon = this.querySelector('.like-button__icon')
        const likesCounter = document.getElementById(postId)


        if (isLiked) {
            likeButtonLabel.classList.add('like-button--liked')
            likeButtonIcon.classList.add('like-button--liked')
            post.likes++

            likedPosts.push(postId)
            console.log(likedPosts)
        } else {
            likeButtonLabel.classList.remove('like-button--liked')
            likeButtonIcon.classList.remove('like-button--liked')
            post.likes--
        }
        
        likesCounter.textContent = post.likes
        
        
    })

})









