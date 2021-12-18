// Function on POST success
function post_success(response) {

    var post_sent = document.getElementById('post_sent');
    // post_sent.innerText = "Your post with title" + response.data.title +  " has been successfully sent!"
    post_sent.innerText = `Your post with title ${response.data.title} has been successfully sent!`;
}
// Function on POST failure
function post_failure(error) {
    var post_sent = document.getElementById('post_sent');
    post_sent.innerText = error.message;
}
// Making a request with axios to make a post (POST request to API)
function make_post() {
    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data: {
            title: title_input.value,
            body: user_post_input.value,
        }
    }).then(post_success).catch(post_failure);
}
// Adding event to the button
document.getElementById('make_post').addEventListener('click', make_post);

// Function on PATCH success
function update_success(response) {
    //var post_updated = document.getElementById('post_sent');
    //post_updated.innerText = "Your post has been successfully updated!"
    console.log(response);
}
// Function on PATCH failure
function update_failure(error) {
    var post_updated = document.getElementById('post_sent');
    post_updated.innerText = "Something went wrong, please try again!"
}

// Making a request with axios to update a post (PATCH request to API)
function update_post() {

    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PATCH",
        data: {
            title: title_input.value,
            body: user_post_input.value,
        }
    }).then(update_success).catch(update_failure);
}
// Adding event to the button
    document.getElementById('update_post').addEventListener('click', update_post);


    function delete_success(response) {
        //var post_sent = document.getElementById('post_sent');
        //post_sent.innerText = "Your post has been successfully sent!"
        console.log(response);
    }
    
    function delete_failure(error) {
        var post_deleted = document.getElementById('post_sent');
        post_deleted.innerText = "Something went wrong, please try again!"
    }
    // Making a request with axios to delete a post (DELETE request to API)
    function delete_post() {
    
    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "DELETE",
        data: {
            title: title_input.value,
            body: user_post_input.value,
        }
    }).then(delete_success).catch(delete_failure);
    }
    // Adding event to the button
    document.getElementById('delete_post').addEventListener('click', delete_post);

// Function on GET success
    function get_success(response) {
        // Grabbing the element from the page so that we can place a list of posts
        var container = document.getElementById("post_container");
    for (var i = 0; i < response.data.length; i++) {
// Adding response from the API to the page by creating elements and putting the returned values there
        var user_div = document.createElement("div");
        var user_id = document.createElement("p");
        user_id.innerText = response.data[i]['userId'];
        user_div.append(user_id);
        container.append(user_div);

        var post_title = document.createElement("h5");
        post_title.innerText = response.data[i]['title'];
        container.append(post_title);

        var post_body = document.createElement("p");
        post_body.innerText = response.data[i]['body'];
        container.append(post_body);
    }
}
    // Function on GET failure
    function get_failure(error) {
        var post_received = document.getElementById('post_sent');
        post_received.innerText = "Something went wrong, please try again!"
    }
    // Making a request with axios to get a list of posts (GET request to API)
    function get_posts() {
    
    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        
    }).then(get_success).catch(get_failure);
    }
// Adding event to the button
    document.getElementById('get_posts').addEventListener('click', get_posts);


