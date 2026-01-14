

const bdTitle = document.getElementById("title");
const bdTbody = document.getElementById("body");
let uId = 1;

function savePost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: bdTitle.value,
      body: bdTbody.value,
      userId: uId++,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log("Error :", error));
}
const parentEl = document.querySelector(".container");



function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => json.map(({title,body,userId})=>{
        const card = document.createElement("div");
        const userIdNode = document.createElement("h4");
        const titleNode = document.createElement("h4");
        const bodyNode = document.createElement("h4");
        userIdNode.textContent = "User Id:" + userId;
        titleNode.textContent = "Titile:" + title;
        bodyNode.textContent = "Body:" + body;
    
        card.setAttribute("class", "card");
        card.appendChild(userIdNode);
        card.appendChild(titleNode);
        card.appendChild(bodyNode);
        parentEl.appendChild(card);

    }))
    .catch((error) => console.log("Error :", error));
}

