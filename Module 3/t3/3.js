'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetelement = document.getElementById("target");

let listitemHTML = "";

for (let i =0; i < names.length; i++) {
  listitemHTML += `<li> ${names[i]}</li>`

}

targetelement.innerHTML = listitemHTML;