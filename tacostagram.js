function getPostsFromAPI() {
  // Replace this with the URL of the JSON API that returns an array of image URLs
  const url = 'https://3000-mccafferys19-css-dqw5k4g3t7a.ws-us119.gitpod.io/posts.json';
  if (url == 'YOUR_URL_GOES_HERE') {
    alert('Error: Replace url value in tacostagram.js')
  }

// Make a GET request to the API
  fetch(url)
    .then(response => response.json())
    .then(posts => {
      const postsDiv = document.querySelector('#posts');
      postsDiv.innerHTML = ''; // clear previous posts

      for (let post of posts) {
        console.log(post);

        // Fallback for anonymous user
        const userName = post.user && post.user.first_name ? post.user.first_name : "anonymous";

        let html = `
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-4">
            <div class="card">
              <img src="${post.image}" class="card-img-top img-fluid" alt="Taco Image">
              <div class="card-body">
                <h5 class="card-title">${userName}</h5>
                <p class="card-text">${post.body}</p>
              </div>
            </div>
          </div>
        `;

        postsDiv.innerHTML += html;
      }
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
  }

const getPostsButton = document.querySelector('#get-posts-button');
getPostsButton.addEventListener('click', getPostsFromAPI);
