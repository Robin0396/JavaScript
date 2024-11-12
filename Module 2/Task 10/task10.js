function voting () {
  const candidates =[];
  const candidatecount = parseInt(prompt('Enter the number of candidates:'));

  for (let i = 0; i < candidatecount; i++) {
    const name = prompt(`Name for candidates ${i + 1}:`);
    candidates.push({name: name,votes: 0});
  }

  const votecount = parseInt(prompt('Enter the number of voters:'));
  for (let i = 0; i < votecount; i++){
    const vote = prompt(`Voter ${i + 1}, enter the name of the candidate you want to vote for:`).trim()

    if (vote) {
      const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
      if (candidate) {
        candidate.votes += 1;
      } else {
        console.log(`Invalid vote: No candidate found with the name "${vote}"`);

      }
    }
  }
  candidates.sort((a, b) => b.votes - a.votes);

  const winner = candidates[0];
  console.log(`The winner is ${winner.name} with ${winner.votes} votes`);

  console.log('Results:');

  candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
  })
}

voting();