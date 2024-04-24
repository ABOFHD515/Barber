let friends = [];
let teams = [];

function addFriend() {
  let friendName = document.getElementById("friends").value.trim();
  if (friendName!== "") {
    friends.push(friendName);
    document.getElementById("friends").value = "";
    updateTeams();
  }
}

function updateTeams() {
  teams = [];
  let numTeams = document.getElementById("num-teams").value;
  let teamSize = Math.ceil(friends.length / numTeams);
  for (let i = 0; i < numTeams; i++) {
    teams.push(friends.slice(i * teamSize, (i + 1) * teamSize));
  }
  displayTeams();
}

function displayTeams() {
  let teamsHTML = "";
  for (let i = 0; i < teams.length; i++) {
    teamsHTML += `<h2>الفريق ${i + 1}</h2><ul>`;
    for (let j = 0; j < teams[i].length; j++) {
      teamsHTML += `<li>${teams[i][j]}</li>`;
    }
    teamsHTML += `</ul>`;
  }
  document.getElementById("teams").innerHTML = teamsHTML;
}
