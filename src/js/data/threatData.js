let amnesiac = {
  name: "Amnesiac",
  knowTheZone: -2,
  description: "<p>A human woman staggers through the Zone. Her eyes are glazed over and seem to focus on some imagined horror. She mumbles alien words, barely audible. She wears dirty and torn coveralls with strange markings. She doesn’t respond to the PCs and collapses on the ground if they try to stop her. Unless Healed, she dies in a couple of hours. If she survives the PCs can talk to her, but her dialect is foreign and she seems to have lost all memory of who she is and where she came from. She might have a clue to the location of Eden (Chapter 16).</p><p> If you have played the Threat Card called The Man on the Beach (page 148), the PCs can recognize both the clothing and the dialect – the woman has the same. She also reacts in a similar way if brought to the Ark. Just like the man on the beach, the woman is one of the cryo-frozen lab assistants from Project Eden – see Chapter 16.</p>",
  attributes: "Strength 2 (currently 1), Agility 2 (currently 1), Wits 4, Empathy 2.",
  skills: "Comprehend 2, Heal 1.",
  mutations: "None.",
  weapons: "None."
}

let humanoidThreat = new Map();
humanoidThreat.set(11, amnesiac);

let threatData = new Map();
threatData.set(1, humanoidThreat);
threatData.set(2, "humanoidThreat");
threatData.set(3, "monster");
threatData.set(4, "monster");
threatData.set(5, "phenomenon");
threatData.set(6, "phenomenon");

function threatTemplate(threat) {
  return `
  <li>
    <p><b>${threat.name.toUpperCase()}:</b> (Know the Zone Modifier: ${threat.knowTheZone})</p>
    <p>${threat.description}</p>
    <p><b>Attributes:</b> ${threat.attributes}</p>
    <p><b>Skills:</b> ${threat.skills}</p>
    <p><b>Mutations:</b> ${threat.mutations}</p>
    <p><b>Weapons:</b> ${threat.weapons}</p>
  </li>
  `;
}

export { humanoidThreat, threatData, threatTemplate };
