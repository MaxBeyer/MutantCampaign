import { mutationData } from './data/mutationsData.js';
import { sectorData } from './data/sectorData.js';
import { moodData } from './data/moodData.js';
import { rotData } from './data/rotData.js';
import { normalRuinData, industrialRuinData } from './data/ruinData.js';
import { artifactData } from './data/artifactData.js';
import{ humanoidThreat, threatData, threatTemplate } from './data/threatData.js';

var coin = {
  sides: 2,
  flip: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d6 = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function rollXNumberOfD6(x){
  let baseSixResult = d6.roll();
  for(var i = 2; i<=x; i++){
    baseSixResult = (d6.roll() * Math.pow(10, i-1)) + baseSixResult;
  }
  return baseSixResult;
}

//Prints d6 roll to the page
function printNumber(number1, number2) {
  let placeholder1 = document.getElementById('placeholder1');
  let placeholder2 = document.getElementById('placeholder2');

  placeholder1.innerHTML = number1;
  placeholder2.innerHTML = number2;
}

function printMutation(number) {
  document.getElementById('mutationPlaceholderMutation').innerHTML = mutationData.get(number).mutation;
  document.getElementById('mutationPlaceholderDescription').innerHTML = mutationData.get(number).description;
}

let rollMutationButton = document.getElementById('rollMutationButton');
rollMutationButton.onclick = function() {
  let reroll = true;
  let diceRoll = rollXNumberOfD6(2);

  while(reroll){
    if(diceRoll < 52){
        reroll = false;
        break;
    }
    diceRoll = rollXNumberOfD6(2);
  }
  printNumber(Math.floor((diceRoll / 10) % 10), Math.floor((diceRoll / 1) % 10));
  printMutation(diceRoll);
};

let generateSectorButton = document.getElementById('generateSectorButton');
generateSectorButton.onclick = function() {
  //validate the threatLevelInput is present
  let threatLevelInput = document.getElementById('threatLevelInput').value;
  if(threatLevelInput == ""){
    alert("You have to enter a threat leve first. How else will you fuck up the players?")
  } else {
    generateSector(threatLevelInput)
  }
}

function generateThreatsAndArtifacts(threatLevelInput){
  let threats = 0;
  let artifacts = 0;
  for(var i = 0; i <= threatLevelInput; i++){
    let threatLevelRoll = d6.roll();
    if(threatLevelRoll == 6){
      artifacts += 1;
    } else if(threatLevelRoll == 1){
      threats += 1;
    }
  }
  return [threats, artifacts];
}

function rollRuin(){
  if(coin.flip() == 1){
    //ruin data defined here because it is conditional and might not be needed
    let normalRuin = normalRuinData.get(rollXNumberOfD6(2));
    document.getElementById('sectorPlaceholderRuins').innerHTML = `<p><b>Ruin (${normalRuin.ruin}): </b>${normalRuin.description}</p>`;
  } else {
    //ruin data defined here because it is conditional and might not be needed
    let industrialRuin = industrialRuinData.get(rollXNumberOfD6(2));
    document.getElementById('sectorPlaceholderRuins').innerHTML = `<p><b>Ruin (${industrialRuin.ruin}): </b>${industrialRuin.description}</p>`;
  }
}

function rollThreats(threats){
  let threatsArray = [];
  for(var i = 1; i <= threats; i++){
    threatsArray.push((threatData.get(1)).get(11));
  }
  document.getElementById('sectorPlaceholderThreats').innerHTML = `<h4>Threats: </h4> <ol>${threatsArray.map(threatTemplate).join("")}</ol>`;
}

function rollArtifacts(artifacts){
  let artifactsArray =[]
  for(var i = 1; i <= artifacts; i++){
    var tempRoll = rollXNumberOfD6(3);
    while(tempRoll > 642){
       tempRoll = rollXNumberOfD6(3)
    }
    artifactsArray.push(artifactData.get(tempRoll));
  }
  document.getElementById('sectorPlaceholderArtifacts').innerHTML = `<h4>Artifacts: </h4><ol>${artifactsArray.join('')}</ol>`;
}

function generateSector(threatLevelInput){
  //sector and rot defined here because they will always be rolled and used
  let sector = sectorData.get(rollXNumberOfD6(2));
  let mood = moodData.get(rollXNumberOfD6(2));
  let rot = rotData.get(rollXNumberOfD6(2));
  let [threats, artifacts] = generateThreatsAndArtifacts(threatLevelInput);
  document.getElementById('sectorPlaceholderEnvironment').innerHTML = `
    <p><b>Environment: </b> ${sector.environment}</p>
    <p><b>Mood Element: </b> ${mood}</p>
    <p><b>Rot Level ${rot.rotLevel}: </b> ${rot.description}</p>
  `
  if(threats > 0){
    rollThreats(threats);
  } else {
    document.getElementById('sectorPlaceholderThreats').innerHTML = "";
  }
  //There are not always ruins or artifacts.  The following conditionals account for that.
  if(sector.ruin){
    rollRuin();
  } else {
    document.getElementById('sectorPlaceholderRuins').innerHTML = "";
  }
  if(sector.artifact && artifacts > 0){
    rollArtifacts(artifacts);
  } else {
    document.getElementById('sectorPlaceholderArtifacts').innerHTML = "";
  }
}
