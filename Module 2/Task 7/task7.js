function rolldice (sides) {
  return Math.floor(Math.random() * sides) + 1 ;
}

function rolluntilmax () {

  let sides = parseInt(prompt('Enter the number of sides on the dice: '));

  let maxnumber = parseInt(prompt(`Enter the number of side you want to roll (usually equal to the number of sides ${sides}):`));

  let rolls = [];

  let result ;
  do {
    result = rolldice(sides);
    rolls.push(result)
  } while (result !== maxnumber);

  let ul = document.createElement('ul');

  rolls.forEach(roll => {
    let li = document.createElement('li');
        li.textContent = roll;
    ul.appendChild(li);
  })

  document.body.appendChild(ul);
}

rolluntilmax();