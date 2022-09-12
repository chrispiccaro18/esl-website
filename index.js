import schedule from "./schedule.js";
import players from "./players.js";

const scheduleList = document.getElementById("schedule-list");

schedule.forEach(game => {
    const li = document.createElement('li');
    let gameText = game.date + " " + game.description;
    if(game.score) gameText = gameText + ", " + game.score;
    li.textContent = gameText;
    scheduleList.appendChild(li);
});

const starsRosterDiv = document.getElementById("stars-roster");
const knightsRosterDiv = document.getElementById("knights-roster");
const angelesRosterDiv = document.getElementById("angels-roster");
const subsRosterDiv = document.getElementById("subs-roster");

const rosters = {
    stars: players.filter(player => player.team === "Stars"),
    knights: players.filter(player => player.team === "Knights"),
    angels: players.filter(player => player.team === "Angels"),
    subs: players.filter(player => player.team === "Sub"),
};

rosters.stars.forEach(player => {
    const li = document.createElement('li');
    const fullName = player.first + " " + player.last;
    li.textContent = fullName;
    starsRosterDiv.appendChild(li);
});

rosters.knights.forEach(player => {
    const li = document.createElement('li');
    const fullName = player.first + " " + player.last;
    li.textContent = fullName;
    knightsRosterDiv.appendChild(li);
});

rosters.angels.forEach(player => {
    const li = document.createElement('li');
    const fullName = player.first + " " + player.last;
    li.textContent = fullName;
    angelesRosterDiv.appendChild(li);
});

rosters.subs.forEach(player => {
    const li = document.createElement('li');
    const fullName = player.first + " " + player.last;
    li.textContent = fullName;
    subsRosterDiv.appendChild(li);
});

