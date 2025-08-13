const list = document.getElementById("infi-list");
let itemCount = 1;

function addListItem() {
  const li = document.createElement("li");
  li.textContent = `Item ${itemCount}`;
  list.appendChild(li);
  itemCount++;
}

// Add first 10
for (let i = 0; i < 10; i++) {
  addListItem();
}

// Listen for scrolling *inside the container*
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
	 
    for (let i = 0; i < 2; i++) {
      addListItem();
    }
  }
});
