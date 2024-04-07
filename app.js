function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
loadPosts();
function displayUsers(posts) {
  const postContainer = document.getElementById("posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<h3>${post.title}</h3>
<p> ${post.body}</p>`;
    postContainer.appendChild(div);
  }
}
function addPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    header: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

///////////////////
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
/* function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
} */
/* function displayUsers(data) {
  const ul = document.getElementById("users");
  data.map((user) => {
    // console.log(user.name);
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name} , Email: ${user.email}`;
    ul.appendChild(li);
  });
} */

//////////////////////////
let w;

function startWorker() {
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      w = new Worker("demo_workers.js");
    }

    //listening for worker events/messages
    w.onmessage = function (event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    alert("Your browser does not support web worker!");
  }
}
function stopWorker() {
  if (typeof Worker !== "undefined") {
    w.terminate();
    w = undefined;
  } else {
    alert("Your browser does not support web worker!");
  }
}

// async await system
const display = document.getElementById("display");
async function getData() {
  const res = await fetch("http://127.0.0.1:5500/data.text");
  const data = await res.text();
  display.innerText = data;
}

// // promise return value
// const display = document.getElementById("display");
// function getData() {
//   fetch("http://127.0.0.1:5500/data.text")
//     .then((res) => res.text())
//     .then((data) => {
//       display.innerText = data;
//     });
// }

function validation() {
  const inputObj = document.getElementById("id1");
  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity("You have made a range overflow error!");
  } else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity("You have made a range rangeUnderflow error!");
  } else if (inputObj.validity.valueMissing) {
    inputObj.setCustomValidity("Value missing!!");
  }

  if (!inputObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inputObj.validationMessage;
  }
}
