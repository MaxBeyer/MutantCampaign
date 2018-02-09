import { mutationData } from './data/mutationsData.js';
import { sectorData } from './data/sectorData.js';
import { moodData } from './data/moodData.js';
import { rotData } from './data/rotData.js';
import { normalRuinData, industrialRuinData } from './data/ruinData.js';

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function roll2d6(){
  let result1 = dice.roll();
  let result2 = dice.roll();
  let baseSixResult = (result1 * 10) + result2;
  return baseSixResult;
}

var coinFlip = {
  sides: 2,
  flip: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page
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
  let diceRoll = roll2d6();

  while(reroll){
    if(diceRoll < 51){
        reroll = false;
        break;
    }
    diceRoll = roll2d6();
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
    let threatLevelRoll = dice.roll();
    if(threatLevelRoll == 6){
      artifacts += 1;
    } else if(threatLevelRoll == 1){
      threats += 1;
    }
  }
  return [threats, artifacts];
}

function rollRuin(){
  if(coinFlip.flip() == 1){
    //ruin data defined here because it is conditional and might not be needed
    let normalRuin = normalRuinData.get(roll2d6());
    document.getElementById('sectorPlaceholderRuins').innerHTML = `<p><b>Ruin (${normalRuin.ruin}): </b>${normalRuin.description}</p>`;
  } else {
    //ruin data defined here because it is conditional and might not be needed
    let industrialRuin = industrialRuinData.get(roll2d6());
    document.getElementById('sectorPlaceholderRuins').innerHTML = `<p><b>Ruin (${industrialRuin.ruin}): </b>${industrialRuin.description}</p>`;
  }
}

function rollThreats(threats){
  let threatsArray = [];
  for(var i = 1; i <= threats; i++){
    threatsArray.push("<li>Threat " + i + "</li>")
  }
  document.getElementById('sectorPlaceholderThreats').innerHTML = `<p><b>Threats: </b> ${threats} ${threatsArray.join('')}</p>`;
}

function rollArtifacts(artifacts){
  let artifactsArray =[]
  for(var i = 1; i <= artifacts; i++){
    artifactsArray.push("<li>Artifact " + i + "</li>");
  }
  document.getElementById('sectorPlaceholderArtifacts').innerHTML = `<p><b>Artifacts: </b> ${artifacts} ${artifactsArray.join('')}</p>`;
}

function generateSector(threatLevelInput){
  //sector and rot defined here because they will always be rolled and used
  let sector = sectorData.get(roll2d6());
  let mood = moodData.get(roll2d6());
  let rot = rotData.get(roll2d6());
  let [threats, artifacts] = generateThreatsAndArtifacts(threatLevelInput);
  document.getElementById('sectorPlaceholderEnvironment').innerHTML = `
    <p><b>Environment: </b> ${sector.environment}</p>
    <p><b>Mood Element: </b> ${mood}</p>
    <p><b>Rot Level ${rot.rotLevel}: </b> ${rot.description}</p>
  `
  if(threats > 0){
    rollThreats(threats);
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
