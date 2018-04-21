//: Configure Router
route.base('/');
route.start(true);

// Mount a tag as a main view
function blog_set_view(view, opts) {
  riot.mount('#view', view, opts);
}

// Home
route('/', function(){
  blog_set_view('blog-roll');
});

// Admin
route('/admin', function(){
  blog_set_view('admin');
});

// New Post
route('/new', function(){
  blog_set_view('editor');
});

//: Edit Post
route('/edit/*', function(url){
  blog_set_view('editor', {post:url});
});

//: Single Blog Post
route('/*', function(url){
  blog_set_view('post', {post:url});
});
