function rolldice () {
  return Math.floor(Math.random() * 6) + 1;
}

function rolluntilsix() {
  let rolls = [];

 do {
  result = rolldice();
  rolls.push(result);
} while (result !== 6);


  let ul = document.createElement('ul');
  rolls.forEach(roll => {
    let li  = document.createElement('li');
    li.textContent = roll;
    ul.appendChild(li);
  })

  document.body.appendChild(ul);

}

rolluntilsix();