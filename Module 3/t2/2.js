const targetelement = document.getElementById("target")

const items = ["First item", "Second item", "Third item"];

items.forEach((text, index) => {
  const listitem = document.createElement("li");

  listitem.textContent = text;

  if (index === 1 ) {
    listitem.classList.add("my-item");
  }

  targetelement.appendChild(listitem);
});