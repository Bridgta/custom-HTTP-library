const http = new customHTTP();

//read
http.get("https://jsonplaceholder.typicode.com/posts", function (
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

const data = {
    title: "Custom Post",
    body: "Your custom post",
};

//create
http.post("https://jsonplaceholder.typicode.com/posts", data, function (
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

//update
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

//delete
http.delete("https://jsonplaceholder.typicode.com/posts/1", function (
    err,
    response
) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
