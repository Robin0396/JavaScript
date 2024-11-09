
let studentName = prompt("Enter the student's name:")

let houseNumber = Math.floor(Math.random() * 5)

let houseName;

if (houseNumber === 1) {
  houseName = 'Gryffindor'
}
else if (houseNumber ===2) {
  houseName = 'Slytherin'
}
else if (houseNumber ===3) {
  houseName = 'Hufflepuff'
}
else {
  houseName = 'Ravenclaw'

}

console.log(studentName , 'you are '  + houseName)