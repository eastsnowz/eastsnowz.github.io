var posts=["2025/11/24/2week/","2025/11/13/hello-world/","2025/11/23/1week/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };