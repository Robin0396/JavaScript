let dognames = [];

for (let i = 0; i < 6; i++) {
  let name = prompt('Enter the name of the Dog' + (i+1) + ":");
  dognames.push(name);
}

dognames.sort().reverse()

let ul = document.createElement("ul");
dognames.forEach(function(name) {
    let li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
});

document.getElementById('dog-list').appendChild(ul);