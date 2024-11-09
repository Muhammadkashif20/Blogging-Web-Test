let postImage=document.getElementById('postImage');
let postName=document.getElementById('postName');
let postText=document.getElementById('postTitle');
let postDescribe=document.getElementById('postDescribe');
let createPost=document.getElementById('createPost')
let showPost=document.getElementById('showPost')
createPost.addEventListener('click',()=>{
    // console.log(postImage.value);
    // console.log(postName.value);
    // console.log(postText.value);
    // console.log(postDescribe.value)
    window.location.href='post.html'
    showPost.innerHTML+=`<article class="post">
                <img src="${postImage.value}" alt="" id="img1">
                <div class="postText">
                    <h2 >${postName.value}</h2>
                    <span class="spanText">${postText.value}</span>
                  </div>
                  <p>${postDescribe.value}
                  </p>
              </article>`
            })
            