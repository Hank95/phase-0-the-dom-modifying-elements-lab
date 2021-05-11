// Write your code here!
const element = document.createElement("div");
document.body.appendChild(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

const main = document.querySelector("#main");
main.remove();

const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "YOUR-NAME is the champion";
