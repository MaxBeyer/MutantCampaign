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

  mutationPlaceholderMutation.innerHTML = mutationTable.get(number).mutation;
  mutationPlaceholderDescription.innerHTML = mutationTable.get(number).description;
}

let rollMutationButton = document.getElementById('rollMutationButton');

rollMutationButton.onclick = function() {
  let result1 = dice.roll();
  let result2 = dice.roll();
  let baseSixResult = (result1 * 10) + result2;
  printNumber(result1, result2);
  printMutation(baseSixResult);
};

let acidSpit = {
  mutation: "Acid Spit",
  description: "Glands in your mouth generate a potent acid. You can: <li> Spit Acid at a target at up to Near range. Costs 1 MP, deals one point of damage directly and one more each turn until the victim rolls to Move. Armor works against the acid. <li> Use your acid to melt a thin rope or bar, or a small object. Costs 1 MP <li> Open a simple lock. Costs 1 MP"
};
let amphibian = {
  mutation: "Amphibian",
  description: ""
};
let corpseEater = {
  mutation: "Corpse-Eater",
  description: ""
};
let extremeReflexes = {
  mutation: "Extreme Reflexes",
  description: ""
};
let flameBreather = {
  mutation: "Flame Breather",
  description: ""
};
let fourArmed = {
  mutation: "Four-Armed",
  description: ""
};
let frogLegs = {
  mutation: "Frog Legs",
  description: ""
};
let humanMagnet = {
  mutation: "Human Magnet",
  description: ""
};
let humanPlant = {
  mutation: "Human Plant",
  description: ""
};
let insectoid = {
  mutation: "Insectoid",
  description: ""
};
let insectWings = {
  mutation: "Insect Wings",
  description: ""
};
let luminescence = {
  mutation: "Luminescence",
  description: ""
};
let manbeast = {
  mutation: "Manbeast",
  description: ""
};
let mindTerror = {
  mutation: "Mind Terror",
  description: ""
};
let puppeteer = {
  mutation: "Puppeteer",
  description: ""
};
let parasite = {
  mutation: "Parasite",
  description: ""
};
let pathokinesis = {
  mutation: "Pathokinesis",
  description: ""
};
let pyrokinesis = {
  mutation: "Pyrokinesis",
  description: ""
};
let reptilian = {
  mutation: "Reptilian",
  description: ""
};
let ratEater = {
  mutation: "Rat-Eater",
  description: ""
};
let sonar = {
  mutation: "Sonar",
  description: ""
};
let spores = {
  mutation: "Spores",
  description: ""
};
let sprinter = {
  mutation: "Sprinter",
  description: ""
};
let telepathy = {
  mutation: "Telepathy",
  description: ""
};
let tracker = {
  mutation: "Tracker",
  description: ""
};
let reRoll = {
  mutation: "Re-roll",
  description: ""
};

let mutationTable = new Map();
mutationTable.set(11, acidSpit);
mutationTable.set(12, amphibian);
mutationTable.set(13, corpseEater);
mutationTable.set(14, extremeReflexes);
mutationTable.set(15, flameBreather);
mutationTable.set(16, fourArmed);
mutationTable.set(21, frogLegs);
mutationTable.set(22, humanMagnet);
mutationTable.set(23, humanPlant);
mutationTable.set(24, insectoid);
mutationTable.set(25, insectWings);
mutationTable.set(26, luminescence);
mutationTable.set(31, manbeast);
mutationTable.set(32, mindTerror);
mutationTable.set(33, puppeteer);
mutationTable.set(34, parasite);
mutationTable.set(35, pathokinesis);
mutationTable.set(36, pyrokinesis);
mutationTable.set(41, reptilian);
mutationTable.set(42, ratEater);
mutationTable.set(43, sonar);
mutationTable.set(44, spores);
mutationTable.set(45, sprinter);
mutationTable.set(46, telepathy);
mutationTable.set(51, tracker);
mutationTable.set(52, reRoll);
mutationTable.set(53, reRoll);
mutationTable.set(54, reRoll);
mutationTable.set(55, reRoll);
mutationTable.set(56, reRoll);
mutationTable.set(61, reRoll);
mutationTable.set(62, reRoll);
mutationTable.set(63, reRoll);
mutationTable.set(64, reRoll);
mutationTable.set(65, reRoll);
mutationTable.set(66, reRoll);
