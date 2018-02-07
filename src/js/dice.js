import { mutationData } from './data/mutationsData.js';
import { sectorData } from './data/sectorData.js';
import { rotData } from './data/rotData.js';

var dice = {
  sides: 6,
  roll: function () {
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
  let mutationPlaceholderMutation = document.getElementById('mutationPlaceholderMutation');
  let mutationPlaceholderDescription = document.getElementById('mutationPlaceholderDescription');

  mutationPlaceholderMutation.innerHTML = mutationData.get(number).mutation;
  mutationPlaceholderDescription.innerHTML = mutationData.get(number).description;
}

function roll2d6(){
  let result1 = dice.roll();
  let result2 = dice.roll();
  let baseSixResult = (result1 * 10) + result2;
  return baseSixResult;
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
  let sector = sectorData.get(roll2d6());
  let rot = rotData.get(roll2d6());
  document.getElementById('sectorPlaceholderEnvironment').innerHTML = `
    <p><b>Environment: </b> ${sector.environment}</p>
    <p><b>Ruin Roll: </b> ${roll2d6()}</p>
    <p><b>Threat Level Roll: </b> ${roll2d6()}</p>
    <p><b>Artifact Roll: </b> ${roll2d6()}</p>
    <p><b>Rot Level ${rot.rotLevel}: </b> ${rot.description}</p>
    <p><b>Threats in the zone roll: </b> ${roll2d6()}</p>
  `
  // document.getElementById('sectorPlaceholderEnvironment').innerHTML = "<b>Environment:</b> " + sector.environment;
  // if(sector.ruin){
  //   document.getElementById('sectorPlaceholderRuins').innerHTML = "Ruin Roll: " + roll2d6();
  // } else {
  //   document.getElementById('sectorPlaceholderRuins').innerHTML = "";
  // }
  // if(sector.threat){
  //   document.getElementById('sectorPlaceholderThreatLevel').innerHTML = "Threat Level Roll: " + roll2d6();
  // } else {
  //   document.getElementById('sectorPlaceholderThreatLevel').innerHTML = "";
  // }
  // if(sector.artifact){
  //   document.getElementById('sectorPlaceholderArtifacts').innerHTML = "Artifact Roll: " + roll2d6();
  // } else {
  //   document.getElementById('sectorPlaceholderArtifacts').innerHTML = "";
  // }
  // let rot = rotData.get(roll2d6());
  // document.getElementById('sectorPlaceholderRotLevel').innerHTML = "<b>Rot Level " + rot.rotLevel +":</b> " + rot.description;
  // document.getElementById('sectorPlaceholderThreatsInTheZone').innerHTML = roll2d6();
}
