const number = parseInt(prompt('Enter the number of participants:'));

   {
    let participants = [];

    for (let i = 0; i < number; i++) {
        let name = prompt('Enter the name of Participant ' + (i + 1) + ":");
        participants.push(name);
    }

    participants.sort();

    let ol = document.createElement("ol");

    participants.forEach(function(name) {
        let li = document.createElement("li");
        li.textContent = name;
        ol.appendChild(li);
    });

    document.getElementById('participant-list').appendChild(ol);

}
