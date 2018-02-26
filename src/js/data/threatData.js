let amnesiac = {
  name: "AMNESIAC",
  knowTheZone: "-2",
  description: "A human woman staggers through the Zone. Her eyes are glazed over and seem to focus on some imagined horror. She mumbles alien words, barely audible. She wears dirty and torn coveralls with strange markings. She doesn’t respond to the PCs and collapses on the ground if they try to stop her. Unless Healed, she dies in a couple of hours. If she survives the PCs can talk to her, but her dialect is foreign and she seems to have lost all memory of who she is and where she came from. She might have a clue to the location of Eden (Chapter 16). If you have played the Threat Card called The Man on the Beach (page 148), the PCs can recognize both the clothing and the dialect – the woman has the same. She also reacts in a similar way if brought to the Ark. Just like the man on the beach, the woman is one of the cryo-frozen lab assistants from Project Eden – see Chapter 16. ",
  attributes: "<b>Attributes:</b> Strength 2 (currently 1), Agility 2 (currently 1), Wits 4, Empathy 2. ",
  skills: "<b>Skills:</b> Comprehend 2, Heal 1. ",
  mutations: "<b>Mutations:</b> None. ",
  weapons: "<b>Weapons:</b> None. ",
};

let beastMutants = {
  name: "BEAST MUTANTS",
  knowTheZone: "-1",
  description: `
  Out in the Zone, there is a tribe of beings that are different from all others. They are not human mutants and they are not wild beasts – they are both. They are animals, but they walk upright on their hind legs, use tools and have a spoken language – primitive and coarse, but a language nonetheless. They are newcomers to the Zone, on their guard or even hostile to strangers. Despite their few numbers the beast mutants seem to belong to several different species – some look like ragged dogs or wolves, others are short and rodent-like, and a third variety are monkey-like climbers. The truth is that the beast mutants – like the People themselves – can trace their origin to the genetics labs of the Ancients, bred to be able to survive the harsh world after the Apocalypse. They are animals given parts of the human intellect and fine motor skills. The small tribe that recently arrived in the Zone has fled from an old research facility located in a distant mountain range, where many of their kin still are being held captive by the mysterious Watchers. The escapees have journeyed to the area of the Zone to find a new home.
  <p><b>Dog:</b> Strength 4, Agility 5, Wits 3, Empathy 2, Fight 1, Move 1. </p>
  <p><b>Bear:</b> Strength 5, Agility 4, Wits 2, Empathy 3, Fight 2. </p>
  <p><b>Rodent:</b> Strength 2, Agility 5, Wits 5, Empathy 2, Sneak 2. </p>
  <p><b>Monkey:</b> Strength 3, Agility 5, Wits 4, Empathy 2, Move 2. </p>
  `,
  mutations: "<b>Mutations:</b> These beasts are mutants, but of a different kind than the People. They don’t have mutations and they don’t use Mutation Points. ",
  weapons: "<b>Weapons:</b> Scrap spear, slingshot, fangs (weapon damage 2, no Gear Bonus). ",
};

let cannibals = {
  name: "CANNIBALS",
  knowTheZone: "±0",
  description: "A group of wiry mutants wearing rags and white face paint. These mutants come from an Ark where the scientists died early on (see Chapter 16), and the abandoned children developed a very brutal society. They are sly and bloodthirsty, and they hunger for fresh mutant meat. They can’t easily be reasoned with (modification -3 to any Manipulation attempt, and even a successful roll will only buy the PCs time until the cannibals get hungry again). Only a very clear show of force will deter the cannibals. Any fallen mutants in their own ranks will soon become grub for the survivors. ",
  attributes: "<b>Attributes:</b> Strength 5, Agility 4, Wits 3, Empathy 2. ",
  skills: "<b>Skills:</b> Fight 2, Move 1. ",
  mutations: "<b>Mutations:</b> One random mutation. ",
  weapons: "<b>Weapons:</b> Scrap spear or slingshot. ",
};

let doomCultists = {
  name: "DOOM CULTISTS",
  knowTheZone: "±0",
  description: "A small band of mutants, expelled from their Ark years ago, who worship a particular ruin or artifact in the Zone. They have lost all common sense and live only to worship the object, which they think will bring the Ancients back to Earth. The cultists may try to recruit PCs and NPCs, or capture them to sacrifice them to their deity. The cult may be in possession of a clue to Eden (Chapter 16). ",
  attributes: "<b>Attributes:</b> Strength 3, Agility 2, Wits 3, Empathy 4. ",
  skills: "<b>Skills:</b> Fight 1, Manipulate 2. ",
  mutations: "<b>Mutations:</b> One random mutation. ",
  weapons: "<b>Weapons:</b> Scrap weapons. ",
};

let exiledMutants = {
  name: "EXILED MUTANTS",
  knowTheZone: "±0",
  description: "A dozen mutants in a sorry state. Their clothes are in tatters, some are limping, others have untreated and infected wounds. They are all starving and badly contaminated by the Rot. Some might even be infected by Parasite Fungus (page 180) or the Gutfish (page 179). These mutants come from another Ark, but have been exiled for some reason. They beg the PCs for help, but they also take the first chance they get to attack and steal the PCs grub – or worse. If the PCs are friendly, the exiles can tell them about their Ark – and they might even have a clue about the location of Eden (Chapter 16). ",
  attributes: "<b>Attributes:</b> Strength 2, Agility 2, Wits 2, Empathy 2. ",
  skills: "<b>Skills:</b> Move 1, Fight 1. ",
  mutations: "<b>Mutations:</b> One random mutation. ",
  weapons: "<b>Weapons:</b> Blunt instrument or slingshot. ",
  special: "<b>Special:</b> Physical contact with one of the exiles counts as a Rot attack (page 126). ",
};

let expeditionFromAnotherArk = {
  name: "EXPEDITION FROM ANOTHER ARK",
  knowTheZone: "+1",
  description: "An expedition, not unlike the PCs’ own, but from another Ark. The strangers are about as many as the PCs. If they haven’t met mutants from another Ark before (through the Threat Card called “The Other People”, see page 150), this meeting can be a turning point in the history of both peoples. The expedition may have an artifact with a clue leading to the location of Eden (Chapter 16). ",
  attributes: "<b>Attributes:</b> Depends on role (page 139). At least one of the patrol members is a Stalker. ",
  skills: "<b>Skills:</b> Depends on role. ",
  mutations: "<b>Mutations:</b> One random mutation. ",
  weapons: "<b>Weapons:</b> Spiked bat or scrap rifle. ",
};

let helldrivers = {
  name: "HELLDRIVERS",
  knowTheZone: "±0",
  description: "Thunder as from an approaching storm rolls across the zonelands. Soon, a horde of bizarre vehicles comes rolling. Cars, buses, motorcycles and trucks – all adorned with sharp spikes, skulls and scrap. The feared Helldrivers are mutants who left their Ark long ago and were lucky enough to come across a big garage with operational vehicles from the Old Age. ",
  attributes: "<b>Attributes:</b> Strength 4, Agility 5, Wits 2, Empathy 3. ",
  skills: "<b>Skills:</b> Shoot 3, Fight 2, Jury-Rig 1. ",
  mutations: "<b>Mutations:</b> One random mutation. ",
  weapons: "<b>Weapons:</b> Bicycle chain, scrap rifle, scrap armor (Armor Rating 3). ",
  vehicles: "<b>Vehicles:</b> The Helldrivers have a number of vehicles (see page 94 for rules and page 199 for stats), often fitted with flamethrowers or even scrap cannons. ",
};

let morlocks = {
  name: "MORLOCKS",
  knowTheZone: "±0",
  description: "Some degenerate wild mutants from lost Arks have taken refuge underground, in tunnels and shelters. These are called morlocks. During the years, the morlocks have lost what little civilization they started with. Now, they are little more than savages and communicate with grunts and snarls. They are not hostile to strangers, but on their guard. If given something in return, they can provide help or information. If attacked, they defend themselves with animal ferocity. They may be in possession of an artifact that gives a clue to the location of Eden (Chapter 16). ",
  attributes: "<b>Attributes:</b> Strength 2, Agility 3, Wits 5, Empathy 2. ",
  skills: "<b>Skills:</b> Move 2, Fight 1. ",
  mutations: "<b>Mutations:</b> One random mutation. ",
  weapons: "<b>Weapons:</b> Scrap spear. ",
};

let novaCultists = {
  name: "NOVA CULTISTS",
  knowTheZone: "-1",
  description: "A procession of men and women with shaved heads, dressed in long robes. They leave some cloth bundles on the ground and leave quietly. If the PCs investigate, they find that each bundle contains a small mutant baby. They are hypothermic and weak, and will die unless the PCs Heal them. Any surviving children will develop powerful mental mutations. The robed people belong to the mythical Nova Cult (page 152). If the PCs confront the cultists, they treat them like air or are spoken to like children. If the PCs resort to violence, the cultists won’t hesitate to use their mental mutations. If the PCs are careful, they can track the cultists back to their lair (page 212). ",
  attributes: "<b>Attributes:</b> Strength 2, Agility 3, Wits 5, Empathy 4. ",
  skills: "<b>Skills:</b> Move 2, Heal 1. ",
  mutations: "<b>Mutations:</b> One random mutation, but mental ones (Mind Terror, Puppeteer, Pathokinesis, Pyrokinesis, Telepathy). The Nova Cultists are powerful and normally start out with 6 MP instead of 3. ",
  weapons: "<b>Weapons:</b> — "
};

let patrolFromTheArk = {
  name: "PATROL FROM THE ARK",
  knowTheZone: "—",
  description: "This patrol from the PCs’ own Ark has found a valuable artifact, or they say they know where to find one. The leader either wants help to bring the artifact back to the Ark, or help to retrieve it. One of the members of the patrol can very well be an NPC that a PC has a relationship to. ",
  attributes: "<b>Attributes:</b> Depends on role (page 139). At least one of the patrol members is a Stalker. ",
  skills: "<b>Skills:</b> Depends on role. ",
  mutations: "<b>Mutations:</b> One random mutation each. ",
  weapons: "<b>Weapons:</b> Spiked bat, scrap knife, scrap rifle. ",
};

let scrapOracle = {
  name: "SCRAP ORACLE",
  knowTheZone: "-1",
  description: "A short and stocky mutant, dressed in a bizarre outfit made of scrap of all shapes and sizes. He’s an oddball character with powerful mental mutations, a telepath that can see visions of the PCs’ possible future. His powers can help the PCs interpret a clue to Eden or guide them in some other way. You can use the scrap oracle to nudge the PCs in some direction that you’d like the campaign to go. ",
  attributes: "<b>Attributes:</b> Strength 2, Agility 3, Wits 4, Empathy 3. ",
  skills: "<b>Skills:</b> Manipulate 2. ",
  mutations: "<b>Mutations:</b> Telepathy, Pathokinesis, Rot-Eater. 6 MP. ",
  weapons: "<b>Weapons:</b> — "
};

let wanderers = {
  name: "WANDERERS",
  knowTheZone: "-1",
  description: "A scrawny and grim-faced band of humans in tattered clothes with a strange look come walking through the zonelands. They are on their guard but not hostile. If the PCs show that they mean no harm, the wanderers can tell – in a strange and foreign dialect – that they have walked for years from a mountain range far away. They ask for grub and water. They want to know where the PCs’ settlement is, and may get hostile if they refuse to answer. See the Ark threat called “The Wanderers” (page 152) for more information on what might happen if the wanderers come to the Ark. If you have already used this Ark threat, this can be a splinter group that has left the main community after some internal strife. Finally, the wanderers might have a clue to Eden (Chapter 16). ",
  attributes: "<b>Attributes:</b> Strength 4, Agility 3, Wits 4, Empathy 3. ",
  skills: "<b>Skills:</b> Shoot 3, Fight 2, Comprehend 1. ",
  mutations: "<b>Mutations:</b> None. ",
  weapons: "<b>Weapons:</b> Scrap knifes, scrap axes, one or more artifacts. ",
};

let waterTrader = {
  name: "WATER TRADER",
  knowTheZone: "±0",
  description: "A lonesome traveler who defies the dangers of the zonelands to trade with clean water. He’s a tall mutant pulling a simple cart, followed by two scrawny mutts. On the cart there are old plastic bottles, big jerrycans and a strange contraption built of pipes and bottles (a Jury-Rigged purification set). The water trader is friendly sort and always ready to do business – and quite ready to defend himself if he needs to. He knows much about the Zone and can tell the PCs where other settlements are located. He may also have a clue to Eden, which he could trade for. He will ask where the PCs live and will try to get to the Ark to do business. ",
  attributes: "<b>Attributes:</b> Strength 2, Agility 3, Wits 4, Empathy 5. ",
  skills: "<b>Skills:</b> Manipulate 2, Shoot 1, Jury-Rig 1. ",
  mutations: "<b>Mutations:</b> One random mutation. ",
  weapons: "<b>Weapons:</b> Scrap pistol (5 bullets) ",
  special: "<b>Special:</b> The water trader can sell Rot-free water. It may contain spawn of Gutfish however (page 179). The price – as always – is a matter of demand. The more desperate for water the PCs are, the more the trader will charge for it. ",
};

let wreckers = {
  name: "WRECKERS",
  knowTheZone: "±0",
  description: "A surprisingly intact big old vehicle wreck sits in a clearing in the Zone. Its windows are dirty and its hatches locked. The wreck is a trap. A band of savage mutants or Zone-Ghouls uses it as bait for unwitting Zone travelers. Their typical plan is simple: They charge out and try attack their victims before they see what’s coming. They will steal everything and take any survivors as slaves in their tribe. The wreckers haven’t been able to open the armored car themselves. If the PCs manage to get in, they will find an artifact. The car engine is decayed beyond repair. ",
  attributes: "<b>Attributes:</b> Strength 3, Agility 4, Wits 3, Empathy 2. ",
  skills: "<b>Skills:</b> Fight 3, Shoot 2, Sneak 1. ",
  mutations: "<b>Mutations:</b> One random mutation each if the wreckers are mutant savages, none if they are Zone-Ghouls (below). ",
  weapons: "<b>Weapons:</b> Spiked bats, slingshots. ",
};

let zoneGhouls = {
  name: "ZONE-GHOULS",
  knowTheZone: "±0",
  description: "When Stalkers tell harrowing stories by the trashcan fires in the Ark, they are most often about the Zone-Ghouls. These aggressive people live like nomads in the Zone, moving in the shadows and attacking other travelers without warning. They are most active at night. There are many rumors about the Zone-Ghouls – it is said that they flay and eat mutants taken captive. Zone-Ghouls are generally shorter than mutants, and they move in large groups. They hide their faces in hoods or masks made of scrap from the Old Age, and often wear scavenged plastic cloaks to protect them against sunlight and acid rains. Their hands and feet are wrapped in plastic or cloth. ",
  attributes: "<b>Attributes:</b> Strength 3, Agility 4, Wits 3, Empathy 2. ",
  skills: "<b>Skills:</b> Move 3, Shoot 2, Fight 1. ",
  mutations: "<b>Mutations:</b> None. ",
  weapons: "<b>Weapons:</b> Bicycle chain, slingshot. ",
  special: "<b>Special:</b> In direct sunlight, the Zone-Ghouls take one point of damage per hour, despite their protective clothing. ",
};

let acidGrass = {
  name: "ACID GRASS",
  knowTheZone: "-1",
  description: "A field of tall grass. A sharp smell hangs in the air, and in the undergrowth remains of dead animals can be seen. The grass moves back and forth as if in a wind – despite the air being dead calm here. The grassy field is actually a predatory plant. If any animal or mutant walk in to the grass, it will start to entangle itself into the victim’s feet, legs and gear. Then, the grass starts to excrete a potent acid, slowly melting the target into a stinking sludge that the grass can feed on. ",
  effect: "<b>Effect:</b> A PC who actively and successfully Scouts the area will notice the old bones in the grass. Anyone moving into the field is immediately attacked by six Base Dice. On a hit, the victim is snared and suffers one point of damage from the acid. To get free, the victim needs to make a Force roll (others can help, page 48). Until then, he suffers another point of damage every turn. The grass can only be damaged by fire. Count its total Strength as 10. When it reaches zero, the grass is dead and the area can be passed without risk. ",
};

let airJellies = {
  name: "AIR JELLIES",
  knowTheZone: "±0",
  description: "Air Jellies are strange creatures, translucent fleshy bubbles the size of an open palm. Thin, long feelers hang down from the main body. They are lighter than air and hover, blowing wherever the wind takes them. Anything that the feelers come into contact with is covered by a sticky, acidic liquid – not harmful to human skin, but corrosive to metal. ",
  effect: "<b>Effect:</b> Air Jellies don’t attack mutants themselves, but rather their gear. Roll to attack using six Base Dice (the Strength score of the swarm). Every / decreases the Gear Bonus of the target item by one step. The attacks continue until the Air Jellies are destroyed or the victims manage to escape. ",
  swarm: "<b>Swarm:</b> Air Jellies can only be hurt by fire or explosions. ",
};

let automaton = {
  name: "AUTOMATON",
  knowTheZone: "-2",
  description: "In the dark depths of the enclaves (Chapter 16), the Titan Powers built machines of metal, plastic and circuits, so advanced that they could compete with their own creators in intelligence, adaptability and creativity. Some researchers even experimented in melting together man and machine, in the hope of creating a being more adapted to surviving in the postapocalyptic world.  PCs can run into a rare automaton that for some reason has found its way to the Zone. For the People, such a being will be seen as a horrible abomination, a walking or hovering metal being with weapons mounted in its very body. ",
  attributes: "<b>Attributes:</b> Strength 8, Agility 6. ",
  skills: "<b>Skills:</b> Fight 4, Shoot 4. ",
  armor: "<b>Armor:</b> 10 ",
  weapons: "<b>Weapons:</b> Chainsaw (weapon damage 2), laser weapon (weapon damage 2, Long range). The weapons are built-in, cannot be used by others and don’t give a Gear Bonus. ",
  special: "<b>Special:</b> The Automaton cannot suffer fatigue at all. Its Agility score never decreases. ",
};

let bitterbeast = {
  name: "BITTERBEAST",
  knowTheZone: "+1",
  description: "Dangerous creatures that Stalkers call Bitterbeasts often prowl the Zone close to lakes and swamps. These are giant lizards, twice the size of a normal mutant. Bitterbeasts are fairly intelligent and it is even said they can be tamed and used as mounts. That’s not without risk however. The Bitterbeasts are known for their foul temper and the ability that has given them their name – they spit acid with alarming accuracy. ",
  attributes: "<b>Attributes:</b> Strength 5, Agility 4 (lower in cold weather). ",
  skills: "<b>Skills:</b> Endure 3, Fight 2, Shoot 3. ",
  armor: "<b>Armor:</b> 2 ",
  weapons: "<b>Weapons:</b> Bite (weapon damage 2), acid spit (Short range, weapon damage 1). ",
};

let deathworm = {
  name: "DEATHWORM",
  knowTheZone: "±0",
  description: "A mutated abomination that hunts by burrowing through the ground and waiting for an unwitting victim to pass by. The Deathworm is twice the length of a mutant and thick as a leg. It’s covered in scales, has innumerable small legs and a big gaping maw with several rings of small but very sharp teeth. The beast is very tenacious and will keep attacking until its victim or it is dead. It lacks the intelligence to flee. ",
  attributes: "<b>Attributes:</b> Strength 8, Agility 3. ",
  skills: "<b>Skills:</b> Fight 3, Sneak 5 (underground), Move 5 (underground). ",
  armor: "<b>Armor:</b> — ",
  weapons: "<b>Weapons:</b> Maw (weapon damage 2). On a hit, the Deathworm attaches itself to the victim and tries to drag it underground. The victim must make a Force roll (one action) to break free. In the meantime, the Deathworm can keep attacking the victim with its inner rings of teeth, and gets a +3 modification. ",
};

let devourer = {
  name: "DEVOURER",
  knowTheZone: "±0",
  description: "A large and savage predator, taller than a mutant when it stands on its hind legs. It has grey fur and looks a little like a bear, but the similarities end there. The Devourer has an insatiable hunger for flesh, can move with extreme silence, and has abnormally huge jaws. It sneaks up on its prey, who often doesn’t realize what’s going on before it’s halfway down the gullet of the beast. The jaws can be dislocated to fit the whole upper body of a grown mutant. Corrosive saliva quickly kills the prey, who won’t be released until it’s dead or the Devourer is forced to flee. ",
  attributes: "<b>Attributes:</b> Strength 6, Agility 4. ",
  skills: "<b>Skills:</b> Fight 3, Sneak 4. ",
  armor: "<b>Armor:</b> 2 ",
  weapons: "<b>Weapons:</b> Claws (weapon damage 1), jaws (weapon damage 3, but can only be used in a sneak attack (page 82). If successful, the victim is caught in the maw and must make a Force roll to break free (modification −2, but friends can help). ",
};

let grazers = {
  name: "GRAZERS",
  knowTheZone: "+1",
  description: "Here and there in the Zone, herds of relatively peaceful grazing animals roam. These are mutated versions of sheep, goats, pigs and cows. They have gone feral and won’t hesitate to attack Zone travelers that they see as threat to the herd. Grazers are good targets for hunting (see the Butcher talent in Chapter 4). ",
  attributes: "<b>Attributes:</b> Strength 2–5, Agility 2–4. ",
  armor: "<b>Armor:</b> — ",
  weapons: "<b>Weapons:</b> Horns, teeth or tusks (weapon damage 1). ",
};

let gutfish = {
  name: "GUTFISH",
  knowTheZone: "±0",
  description: "The Gutfish is a feared parasite that spreads through drinking water. Even Rot-free water can be infected – the only way to be safe is to boil the water. The Gutfish spawn grow inside the stomach of the host, feeding off whatever the host eats. When the Gutfish, which looks more like an eel than a fish, is fully grown (approximately six feet long) it bites its way out and slithers away to the nearest lake or creek. ",
  effect: "<b>Effect:</b> After the infection, the host gets incredibly hungry and must eat at least two rations of grub per day not to become starving (page 92). After 2D6 days, the Gutfish is fully grown and tries to gnaw its way out. This will automatically break the host (Strength drops to zero) and suffers the Bleeding Gut critical injury (entry 52 on the table on page 91). ",
};

let killerTree = {
  name: "KILLER TREE",
  knowTheZone: "-1",
  description: "An overgrown area that is unnervingly still and quiet. This is the home of one of the most feared and bizarre beings in the entire Zone – the Killer Tree. Its thick, dark trunk ends in a gaping maw, that is surrounded by slithering tentacles. Among the tree’s thick and gnarled roots lie bones, skulls and rusty gear – remains of the Killer Tree’s many victims. The most astonishing parts of this semi-sentient plant are its humanoid seed pods. They can mimic human (or mutant) appearance and even speech, but lack actual intelligence. The seed pods prowl the area, hunting for victims to feed their ever hungry mother tree. ",
  attributes: "<b>Attributes:</b> Strength 10, Agility 6. ",
  skills: "<b>Skills:</b> Fight 3. ",
  armor: "<b>Armor:</b> 6 ",
  weapons: `
  <b>Weapons:</b> Tentacles (Near range, the Base Dice and Skill Dice can be distributed across several victims, weapon damage 1, upon a hit the victim is snared and must make a Force to get free), maw (weapon damage 3, can only be used on a snared victim).
    <li><b>Mind Control</b> The Killer Tree can lure its victims close with powerful telepathic pulses. Anyone within Short range must roll to Move – a failed roll means the victim suffers one point of confusion and must move closer to the tree. </li>
    <li><b>Seed Pods</b> Victims who manage to withstand the tree’s mind powers are usually attacked by its humanoid seed pods. In their natural state, the pods have greenish hue and lack both body hair and any distinct facial features. A typical seed pod has Strength 3, Agility 5 and Fight skill level 2. A seed pod can mimic the exact appearance of a human or mutant, by pushing tendrils into the brain of the victim and extracting its stem cells. The victim, who needs to be held down or broken by damage for the attack to be made, dies in the process. A seed pod becomes totally identical to its victim and can even mimic its voice, but is completely without emotion and cannot be Manipulated or Intimidated. </li>`
};

let mindMosquitoes = {
  name: "MIND MOSQUITOES",
  knowTheZone: "-1",
  description: "In the Zone, there are areas buzzing with mosquitoes that can have direct impact on the human (or mutant) mind. Anyone moving in the area starts to feel depressed and despondent. The victims feel a growing urge to just sit down and do nothing at all, which lets the mosquitoes suck blood unhindered. The attack in itself is not harmful, but the mental effects can have dangerous consequences. ",
  effect: "<b>Effect:</b> Victims affected by the Mind Mosquitoes each turn suffer an attack with a number of Base Dice equal to the Strength of the swarm – a typical starting value is 8. Each / rolled inflicts one point of doubt. To get away, a victim needs to make a Move roll. The swarm can only be hurt by fire or explosions. When its Strength reaches zero, it is completely destroyed. ",
};

let nightmareFlowers = {
  name: "NIGHTMARE FLOWERS",
  knowTheZone: "-1",
  description: "An area filled with large flowers, clinging to every surface. Heavy and moist petals, stamens and pistils grow with intense colors. If anyone moves through the area, the flowers will exude a cloud of spores with a strong sedative effect. When a victim falls unconscious to the ground, the plants’ thorny vines burrow into its flesh and suck the blood out of them. Remains of previous victims litter the ground, but can be hard to spot beneath the greenery. There might even be an artifact here. ",
  effect: "<b>Effect:</b> A PC who Scouts the area successfully will notice the bones of previous victims. Anyone who walks into the greenery must make a Move roll or be incapacitated by the powerful spores. Lying on the ground, the victim suffers one point of damage per turn until he is broken or until someone pulls him out (a Force roll). The Nightmare Flowers can only be destroyed by fire. Count the flowers’ combined Strength as 10. When it reaches zero, the flowers are dead and the area can be passed without risk. ",
};;

let parasiteFungus = {
  name: "PARASITE FUNGUS",
  knowTheZone: "±0",
  description: "This deadly fungoid life form infects its victims through mycelium at close contact with an infected body. The Parasite Fungus grows inside the host’s body and brain, with horrible pain as a result. The victim’s behavior is also affected. ",
  effect: "<b>Effect:</b> After the time of infection, the victim suffers one point of damage per day. This damage can be healed by rest and grub, but this will mean the victim needs to eat more to keep from being broken. If broken, the victim suffers a critical injury from non-typical damage (page 92). At irregular intervals (whenever you want) the Parasite Fungus affects the victim’s brain in order to make it come close to another host, to keep spreading the infection. The victim needs to make a Wits roll (no skill can be used) to resist the impulse. The only way to be cured is to be broken by damage and then Healed. ",
};;

let razorback = {
  name: "RAZORBACK",
  knowTheZone: "±0",
  description: "A huge monster of a boar, standing taller than a mutant and angrier than a dozen. Despite its rather small legs, this beast can achieve an astonishing speed, and its rugged tusks can tear a car wreck apart. Anything seems to set the Razorback off on a killing frenzy, and stopping it is nigh impossible. The beast is not a predator and generally does not hunt to feed – instead in feeds on anything from corpses to Zone plants. ",
  attributes: "<b>Attributes:</b> Strength 10, Agility 6. ",
  skills: "<b>Skills:</b> Fight 4 ",
  armor: "<b>Armor:</b> 8 ",
  weapons: "<b>Weapons:</b> Charge (weapon damage 2 – this is a combined move/attack that must start at Short range and ends up at Arm’s Length), tusks (weapon damage 3). ",
};;

let rotAnts = {
  name: "ROT ANTS",
  knowTheZone: "±0",
  description: "The Rot Ants are a legend among Zone travelers. The worst thing is not the insect as such – nasty as it is, the size of a fist and with powerful jaws – but the overwhelming numbers. Rot Ants don’t build anthills. Instead, they barrage through the Zone in millions upon millions, devouring everything in their path. They are blind and consider any living thing as food. Stalkers claim to have seen a swarm of Zone Ants kill a Devourer in under a minute. As if that was not enough, these insect spread the Rot wherever they go. ",
  attributes: "<b>Attributes:</b> Strength 6. ",
  armor: "<b>Armor:</b> — ",
  weapons: "<b>Weapons:</b> Bite (weapon damage 1). ",
  rot: "<b>Rot:</b> Any attack from Rot Ants, whether successful or not, inflicts one point for Rot on the victim. ",
  swarm: "<b>Swarm:</b> The Rot Ants’ swarm is huge. It simply cannot be decimated by any weapons the PCs could conceivably get their hands on. The only way to survive is to run. ",
};;

let rotfish = {
  name: "ROTFISH",
  knowTheZone: "±0",
  description: "In the murky waters of Zone lakes and rivers, the Rotfish lurk. This monster varies greatly in shape, from scaly flatfish to eel-like beasts with sharp fins. The Rotfish can attack swimmers or careless Zone travelers walking close to the waterline, and often pulls its prey down under water to drown it. ",
  attributes: "<b>Attributes:</b> Strength 7, Agility 5. ",
  skills: "<b>Skills:</b> Fight 3, Move 4 (underwater). ",
  armor: "<b>Armor:</b> 5 ",
  weapons: "<b>Weapons:</b> Bite (weapon damage 2). ",
  drowning: "<b>Drowning:</b> In the turn after a successful Fight attack, the Rotfish can pull its prey down under water to drown it. The victim will suffer one point of damage per turn (unless Amphibian) and must make a Force roll to break free. ",
};;

let scrapCrows = {
  name: "SCRAP CROWS",
  knowTheZone: "+1",
  description: "Big, ash-feathered birds that live in flocks in the Zone. They can attack Zone travelers careless enough to walk out in the open, hacking at the eyes with their sharp beaks. These Rot-ridden birds are called Scrap Crows by the People because they are attracted by anything shiny especially valuable scrap from the Old Age. ",
  attributes: "<b>Attributes:</b> Strength 7, Agility 6 ",
  armor: "<b>Armor:</b> — ",
  weapons: "<b>Weapons:</b> Beak and claws (weapon damage 1). ",
  swarm: "<b>Swarm:</b> Can only be harmed by fire or explosions. ",
};;

let trashHawk = {
  name: "TRASH HAWK",
  knowTheZone: "±0",
  description: "Perched on the roofs of tall ruins, the Trash Hawk watches the Zone for prey. Yellow and brown feathers make it blend in well in the wasteland. This predatory bird has claws long and sharp as knives, and attack by quickly swooping down at its target and simply ripping off a large piece of flesh. If big enough, it even grabs its prey and flies off with it. Stalkers claim to have seen Trash Hawks with a wingspan of 25 feet. ",
  attributes: "<b>Attributes:</b> Strength 6, Agility 8. ",
  skills: "<b>Skills:</b> Fight 3, Sneak 4, Move 4, Force 2. ",
  armor: "<b>Armor:</b> 1 ",
  weapons: "<b>Weapons:</b> Claws (weapon damage 2). <li><b>Swooping Attack</b></li> A Trash Hawk can swoop down from Long distance and Fight its target immediately. The bird takes one point of damage itself in the attack. <li><b>Lift Off:</b></li> In the turn after a successful attack, the Trash Hawk can fly off with its prey if it makes a Force roll. ",
};;

let wormSwarm = {
  name: "WORM SWARM",
  knowTheZone: "-1",
  description: "This enormous cluster of black worms, each a few inches long, has developed a collective mind and behaves like an individual being. A typical Worm Swarm consists of millions of maggots. These bizarre beings often dwell in dark and damp places, attacking prey that happen to pass by. The swarm moves rapidly to engulf the victim and cause it to panic, and then proceeds to eat it alive. ",
  attributes: "<b>Attributes:</b> Strength 8 (typical starting score, see below). ",
  armor: "<b>Armor:</b> — ",
  weapons: "<b>Weapons:</b> Engulfing attack (weapon damage 1). In the first turn only, the attack causes doubt instead of damage. For each point of damage that the victim suffers, the Strength of the Worm Swarm increases by one (even above its starting value). ",
  swarm: "<b>Swarm:</b> The Worm Swarm counts as a swarm and can only be damaged by fire and explosions. ",
};;

let zoneDogs = {
  name: "ZONE DOGS",
  knowTheZone: "+1",
  description: "Packs of ever hungry mutated mutts are common in the Zone. They are scrawny, wiry and often lack fur. ",
  attributes: "<b>Attributes:</b> Strength 4, Agility 6. ",
  skills: "<b>Skills:</b> Fight 2, Move 3. ",
  armor: "<b>Armor:</b> — ",
  weapons: "<b>Weapons:</b> Bite (weapon damage 2). ",
};;

let zoneRats = {
  name: "ZONE RATS",
  knowTheZone: "+1",
  description: "These scrawny but unnervingly large rats live in hordes in the Zone. The Rot just seems to make them bigger and meaner. They are long as a mutant’s arm and will chew into any meat they come across, alive or dead, with their long, yellow teeth. ",
  attributes: "<b>Attributes:</b> Strength 8, Agility 5. ",
  armor: "<b>Armor:</b> — ",
  weapons: "<b>Weapons:</b> Teeth (weapon damage 1). ",
  swarm: "<b>Swarm:</b> Can only be damaged by fire or explosions. ",
  rot: "<b>Rot:</b> Every attack from a Zone Rat, whether successful or not, inflicts a Rot Point on the target. ",
};

let zoneSpider = {
  name: "ZONE SPIDER",
  knowTheZone: "±0",
  description: "In dark tunnels and ruins, mutated spiders grown to absurd sizes dwell. Careless Zone travelers who step right through old decayed tunnel roofs or who explore ancient ruins can end up right in the middle of a nest. The Zone Spiders feed on anything from corpses and refuse to living prey that they first paralyze with their poisonous bite. ",
  attributes: "<b>Attributes:</b> Strength 5. ",
  skills: "<b>Skills:</b> Fight 2, Move 2. ",
  armor: "<b>Armor:</b> 3 ",
  weapons: "<b>Weapons:</b> Bite (weapon damage 1 and poison). ",
  poison: "<b>Poison:</b> If the spider’s bite inflicts damage, the poison enters the victim’s body and causes one point of fatigue per turn until the victim is broken. A successful Heal roll (modification −2 if attempting it on oneself) to suck the poison out will stop the process. ",
};

let zoneWasps = {
  name: "ZONE WASPS",
  knowTheZone: "±0",
  description: "The first thing the victims hear is the buzzing sound, unnaturally deep and repulsive. The Zone Wasps are black and yellow like their ancestors in the Old Age, but big as fists and just as hard. Their sting injects a potent hallucinogenic poison that confuses the prey and makes it easier for the insects to tear it apart. As if that was not bad enough, in combat the Zone Wasps emit pheromones that alert other Zone Wasps nearby, quickly swelling their numbers. ",
  attributes: "<b>Attributes:</b> Strength 5. ",
  armor: "<b>Armor:</b> 2 ",
  weapons: "<b>Weapons:</b> Bite (weapon damage 1). Hallucinogenic ",
  poison: "<b>Poison:</b> All attacks that give the victim one or more points of damage also inflicts one point of confusion. ",
  pheromones: "<b>Pheromones:</b> The Strength of the swarm increases one step every turn until the victims are either dead or have escaped. ",
  swarm: "<b>Swarm:</b> The Zone Wasps can only be damaged by fire or explosions. ",
};

let zoneLeeches = {
  name: "ZONE LEECHES",
  knowTheZone: "±0",
  description: "Fist-sized critters that dwell in thick undergrowth or in dark ruins, sensing the heat of passing prey and falling onto it. These slimy beasts have neither legs nor eyes, only a maw ringed by small and sharp teeth. If a leech lands on a living being, it immediately bites into the flesh and starts sucking blood out at an alarming rate. A dozen leeches can completely drain a grown mutant. ",
  attributes: "<b>Attributes:</b> Strength 6. ",
  armor: "<b>Armor:</b> — ",
  weapons: "<b>Weapons:</b> Bite (weapon damage 1). If the initial attack is successful, the leeches attach to their victim, which will suffer one more point of damage every turn until the leeches are removed. To pull or cut off the leeches from someone requires a successful Fight roll. Doing it on yourself is possible, but gives a −2 modification. ",
  swarm: "<b>Swarm:</b> Zone Leeches can only be hurt by fire or explosions. ",
};

let acidRain = {
  name: "ACID RAIN",
  knowTheZone: "+1",
  description: "Heavy raindrops start to fall from the Zone sky. But this is no ordinary rain. The strongly acidic drops burn whatever they land on, and the PCs need to seek cover. When the Acid Rain is over (after D6 hours), everything in the area is pockmarked by the acid drops, and puddles of burning acid cover the ground. ",
  effect: "<b>Effect:</b> Anyone caught in the Acid Rain suffers an attack with a number of Base Dice determined by the intensity of the rain – 6 is normal, but anything from 4 to 10 is possible. Every / rolled inflicts one point of damage. Armor works normally. The victims suffer one attack like this per turn until they manage to find a shelter that protects them from the rain – this normally requires a Move roll. ",
};

let ashStorm = {
  name: "ASH STORM",
  knowTheZone: "+1",
  description: "A strong gale sweeps across the Zone, whipping up the ashes that lie in droves among the ruins. The ash cloud reduces visibility to a few feet, stings the eyes and makes it hard to breathe. After a few hours, when the air finally clears, everything is covered in a fine layer of ash. ",
  effect: "<b>Effect:</b> Zone travelers who want to push on in the Ash Storm need to make an Endure roll. A failed roll means the travelers must stop and find shelter. The storm lasts D6 hours. ",
};

let dustTornado = {
  name: "DUST TORNADO",
  knowTheZone: "-1",
  description: "The wind suddenly picks up and the air is filled by sand and ashes. Around the PCs, black twirling funnels of tornados appear. Suddenly, and old house is pulled apart by a black twister, moving right toward the PCs. ",
  effect: "<b>Effect:</b> Anyone in the path of the Dust Tornado needs to make a Move roll to get away in time. Failure results in an attack with 12 Base Dice (weapon damage 1). Cover and armor have their normal effect. ",
};

let ghostLights = {
  name: "GHOST LIGHTS",
  knowTheZone: "±0",
  description: "A pale green shimmering light moves among the ruins or trees in the area. If anyone tries to get close to the light, it moves away, as if aware of their presence. The strange light remains in the area for some minutes, then suddenly disappears. ",
  effect: "<b>Effect:</b> None – but feel free to let the players think otherwise. The PCs cannot affect the Ghost Lights in any way. ",
};

let electricStorm = {
  name: "ELECTRIC STORM",
  knowTheZone: "±0",
  description: "Dark clouds descend on the area. The air smells like metal, hairs stand straight up and all metal objects start to spark. Suddenly, lightning starts to strike everywhere. Again and again, the area is bombarded. The flashes of light are blinding and the thunder deafening. The Electric Storm only lasts a few minutes, but they feel like a lifetime. ",
  effect: "<b>Effect:</b> Anyone caught in the storm is subject to an attack with four Base Dice (weapon damage 1). A victim located on high ground or on something made of metal suffers an attack with eight Base Dice. Cover helps, but armor does not. Roll again in every turn until the PCs have found cover – which requires a successful Move roll. ",
};

let heatWave = {
  name: "HEAT WAVE",
  knowTheZone: "±0",
  description: "The temperature suddenly peaks to an extreme level. The PCs find themselves panting and sweating profusely. Metal objects are painful to touch. ",
  effect: "<b>Effect:</b> Anyone caught in the heat must make an Endure roll after performing any physical action. This roll doesn’t count as an action in itself – roll it immediately. Failure means suffering one point of fatigue. In addition, everyone suffering the Heat Wave must drink one ration of water every hour, or become Dehydrated (page 92). The Heat Wave lasts D6 hours. ",
  comment: "<b>Comment:</b>Use this phenomenon only in summer. In the wintertime, use Temperature Drop instead. ",
};

let inertiaField = {
  name: "INERTIA FIELD",
  knowTheZone: "-1",
  description: "Some distance away, the PCs spot a monster or a humanoid who seems completely frozen in the middle of a motion. If anyone moves closer, others see how this person seems to move in slow motion. In this area, there is a strange force field that makes time itself slow down. To anyone moving into the field, the outside world seems to move more quickly. The effect increases further into the field. It is possible to talk to someone inside of the field, but to him the voices will speak very quickly and be very shrill. His own voice will be slow to persons outside of the field. ",
  effect: "<b>Effect:</b> Being at the outer rim of the field is not dangerous, but anyone moving toward its center risks being caught in it forever. Let a PC who moves into the field (or who seems someone else caught in it) roll to Know the Zone. If successful, the PC realizes the risk. ",
};

let magneticField = {
  name: "MAGNETIC FIELD",
  knowTheZone: "-1",
  description: "The remains of some sort of ancient underground power plant creates a strong magnetic field in this area. The PCs hear a low humming sound and get goosebumps on their skin. If they linger in the area, they will feel metal objects being pulled toward a particular point. ",
  effect: "<b>Effect:</b> The PCs must either drop all metal objects that they are carrying, or make a Force roll to get out of the Magnetic Field with their metal gear. Anyone wearing scrap armor must make a Force roll, it’s not possible to get out of the armor fast enough. Anyone who fails the roll can try again in the next turn, but with a −1 modification. The modification grows to −2 in the third turn, etc. Suddenly and inexplicably (whenever you decide), the Magnetic Field dissipates. ",
};

let mirage = {
  name: "MIRAGE",
  knowTheZone: "-1",
  description: "The terrain close to the PCs suddenly blurs and deforms. It changes appearance completely and now looks like it did in the Old Age – no decay, no debris, everything clean and orderly. The PCs have walked into a hologram, the remains of ancient defensive perimeter. ",
  effect: "<b>Effect:</b> The PCs risk bumping into things that they cannot see, and therefore must act as if in total darkness (page 93). The hologram is approximately 50 feet across. ",
};

let mudPuddles = {
  name: "MUD PUDDLES",
  knowTheZone: "±0",
  description: "This foggy area is covered by large puddles of thick, warm mud. There is solid ground underneath the mud, but it will reach to the knees of anyone who walks through the puddles. In addition, there are hidden wells of steaming hot water in some places. Walking through the area risks triggering geysers of hot water, scalding everyone nearby. ",
  effect: "<b>Effect:</b> A PC who successfully Scouts the area will notice bubbles and steam coming out of the mud at certain locations. Wading through the area requires a Know the Zone roll – failure means triggering a steam geyser. Roll six Base Dice to attack everyone within Near distance. Every / rolled inflicts one point of damage. Armor has the normal effect. Anyone who suffers one or more points of damage also gets one Rot Point. Staying in this area has one useful effect – the hot steam keeps the area warm, and thus protects against severe cold (page 93). ",
};

let nightLights = {
  name: "NIGHT LIGHTS",
  knowTheZone: "-1",
  description: "Huge, billowing lights in sickly colors fill the night sky. Artifacts and other gear that run on electricity start to work erratically, or not at all. Some see a bad omen in these lights, others the sign of a new dawn for the world. Some just find the lights pretty. The lights last until morning. ",
  effect: "<b>Effect:</b> All electric artifacts (such as the Flashlight, Cassette Player, and Video Camera) won’t work properly as long as the Night Lights linger. ",
  comment: "<b>Comment:</b>If you roll up this phenomenon in the daytime, have the Night Lights appear the following evening. ",
};

let obelisk = {
  name: "OBELISK",
  knowTheZone: "-1",
  description: "In the middle of wasteland, the tall black Obelisk stands. It seems to be made of some kind of very durable metal. The PCs cannot find any visible hatches or slits in the metal, and the Obelisk seems to be completely untouched by the passage of time. The Obelisk seems alien to the PCs, and it can even affect their minds in strange ways. ",
  effect: "<b>Effect:</b> The energies emanating from The Obelisk can induce psychedelic hallucinations. Anyone within Short range of it must make a Know the Zone roll – failure means suffering a point of confusion. ",
};

let pillarsOfLight = {
  name: "PILLARS OF LIGHT",
  knowTheZone: "±0",
  description: "Two big pillars of light appear by the horizon, beaming up toward the black Zone sky. Where do the lights originate? And why have they appeared now. ",
  effect: "<b>Effect:</b> None. But have NPCs tell tales of these lights, saying that the lead the way to Eden, to another Ark, or that they are a bad omen. ",
};

let rotHotspot = {
  name: "ROT HOTSPOT",
  knowTheZone: "±0",
  description: "The coast seems clear. There are no visible threats around, and the exploration can commence unhindered. But in this place, the Rot is very strong and can kill unwitting Zone travelers or scar them for life. ",
  effect: "<b>Effect:</b> Give the players a chance to notice that something is amiss, such as a number of cadavers on the ground or a pipe leaking green sludge. Anyone who proceeds despite the warning signs suffers one Rot Point per minute in the area. ",
};

let rotWind = {
  name: "ROT WIND",
  knowTheZone: "±0",
  description: "A wind carrying foul Rot-ridden fumes sweep across the sector. The air is filled by dust and a sickening stench. ",
  effect: "<b>Effect:</b> The Rot Wind immediately inflicts one Rot Points on every person caught in it. In addition, any water or grub carried by the PCs will be contaminated by Rot, inflicting one Rot Point per ration consumed. The Rot Wind lasts D6 hours. ",
};

let sinkhole = {
  name: "SINKHOLE",
  knowTheZone: "±0",
  description: "The ground suddenly gives in, and a huge hole into the ground or into some ancient underground facility opens up. ",
  effect: "<b>Effect:</b> Anyone close to the collapse must make a Move roll to avoid falling into the Sinkhole. Doing so inflicts one point of damage in itself – and can expose the victim to any number of underground threats, such as monsters or Rot. Climbing up can also be difficult, usually requiring a Move roll. ",
};

let temperatureDrop = {
  name: "TEMPERATURE DROP",
  knowTheZone: "±0",
  description: "Suddenly, the wind picks up, the temperature drops and a heavy snowfall starts. Then, the wind and the snowing stops. A wall of white clouds forms a tall cylinder right above the PCs. A crystal blue sky can be seen above. The serenity comes with a cost – the temperature drops dramatically. Exposure can be lethal. ",
  effect: "<b>Effect:</b> Any Zone travelers caught out in the open must immediately roll to Endure severe cold (page 93). One roll every 15 minutes is required, until the cold spot passes (after D6 hours) or the PCs move out of the sector. Lighting a fire can keep the cold at bay, but it requires firewood and an Agility roll (no skill used). ",
  comment: "<b>Comment:</b>Use this phenomenon only in winter. In the summertime, use Heat Wave instead. ",
};

let unexplodedOrdnance = {
  name: "UNEXPLODED ORDNANCE",
  knowTheZone: "+1",
  description: "This entire area is scarred by gunshots and explosions. In the ground, mines and/or unexploded grenades and bombs are hidden. Walking through this area is very dangerous. ",
  effect: "<b>Effect:</b> Anyone who walks through the area must make a Move roll. Failure means triggering a Blast Power 6 explosion at Arm’s Length (page 94). ",
};

let vacuum = {
  name: "VACUUM",
  knowTheZone: "-1",
  description: "The PCs pass an area completely void of air. There is no visible explanation as to why the air does not fill this void. The first thing the PCs notice is that they cannot speak or breathe. ",
  effect: "<b>Effect:</b> Anyone caught in the Vacuum must make a Move roll. Failure means that the victims panics and remains in the Vacuum another turn. Every turn in the Vacuum inflicts one point of damage. One roll to get out of the Vacuum is allowed per turn. ",
};

let zoneSmog = {
  name: "ZONE SMOG",
  knowTheZone: "+1",
  description: "A thick, yellowish fog rises from the ground. At first, is stays at knee-height, but soon it completely obscures vision. Eyes tear up and the smog burns the nose and mouth when breathing. ",
  effect: "<b>Effect:</b> Everyone caught in the Zone Smog suffers one Rot Point. Vision is limited to Near range – the PCs cannot see (or Shoot at) anything farther away. Some Zone monsters take advantage of the Zone Smog to hunt – feel free to choose or roll one up. The only way to escape the smog is to find an elevated position like a tall building or a hill. The Zone Smog stays at ground level, and dissipates after D6 hours."
};

let humanoidThreat = new Map();
humanoidThreat.set(11, amnesiac);
humanoidThreat.set(12, beastMutants);
humanoidThreat.set(13, beastMutants);
humanoidThreat.set(14, cannibals);
humanoidThreat.set(15, cannibals);
humanoidThreat.set(16, cannibals);
humanoidThreat.set(21, doomCultists);
humanoidThreat.set(22, doomCultists);
humanoidThreat.set(23, exiledMutants);
humanoidThreat.set(24, exiledMutants);
humanoidThreat.set(25, exiledMutants);
humanoidThreat.set(26, expeditionFromAnotherArk);
humanoidThreat.set(31, expeditionFromAnotherArk);
humanoidThreat.set(32, expeditionFromAnotherArk);
humanoidThreat.set(33, helldrivers);
humanoidThreat.set(34, helldrivers);
humanoidThreat.set(35, helldrivers);
humanoidThreat.set(36, morlocks);
humanoidThreat.set(41, morlocks);
humanoidThreat.set(42, morlocks);
humanoidThreat.set(43, novaCultists);
humanoidThreat.set(44, novaCultists);
humanoidThreat.set(45, patrolFromTheArk);
humanoidThreat.set(46, patrolFromTheArk);
humanoidThreat.set(51, scrapOracle);
humanoidThreat.set(52, scrapOracle);
humanoidThreat.set(53, wanderers);
humanoidThreat.set(54, wanderers);
humanoidThreat.set(55, waterTrader);
humanoidThreat.set(56, waterTrader);
humanoidThreat.set(61, wreckers);
humanoidThreat.set(62, wreckers);
humanoidThreat.set(63, zoneGhouls);
humanoidThreat.set(64, zoneGhouls);
humanoidThreat.set(65, zoneGhouls);
humanoidThreat.set(66, zoneGhouls);

let monsterThreat = new Map();
monsterThreat.set(11, acidGrass);
monsterThreat.set(12, acidGrass);
monsterThreat.set(13, airJellies);
monsterThreat.set(14, automaton);
monsterThreat.set(15, bitterbeast);
monsterThreat.set(16, bitterbeast);
monsterThreat.set(21, deathworm);
monsterThreat.set(22, deathworm);
monsterThreat.set(23, devourer);
monsterThreat.set(24, devourer);
monsterThreat.set(25, grazers);
monsterThreat.set(26, grazers);
monsterThreat.set(31, gutfish);
monsterThreat.set(32, killerTree);
monsterThreat.set(33, mindMosquitoes);
monsterThreat.set(34, nightmareFlowers);
monsterThreat.set(35, parasiteFungus);
monsterThreat.set(36, razorback);
monsterThreat.set(41, rotAnts);
monsterThreat.set(42, rotAnts);
monsterThreat.set(43, rotfish);
monsterThreat.set(44, scrapCrows);
monsterThreat.set(45, scrapCrows);
monsterThreat.set(46, trashHawk);
monsterThreat.set(51, wormSwarm);
monsterThreat.set(52, zoneDogs);
monsterThreat.set(53, zoneDogs);
monsterThreat.set(54, zoneDogs);
monsterThreat.set(55, zoneLeeches);
monsterThreat.set(56, zoneLeeches);
monsterThreat.set(61, zoneRats);
monsterThreat.set(62, zoneRats);
monsterThreat.set(63, zoneSpider);
monsterThreat.set(64, zoneSpider);
monsterThreat.set(65, zoneWasps);
monsterThreat.set(66, zoneWasps);

let phenomenonThreat = new Map();
phenomenonThreat.set(11, acidRain);
phenomenonThreat.set(12, acidRain);
phenomenonThreat.set(13, acidRain);
phenomenonThreat.set(14, ashStorm);
phenomenonThreat.set(15, ashStorm);
phenomenonThreat.set(16, dustTornado);
phenomenonThreat.set(21, dustTornado);
phenomenonThreat.set(22, electricStorm);
phenomenonThreat.set(23, electricStorm);
phenomenonThreat.set(24, ghostLights);
phenomenonThreat.set(25, inertiaField);
phenomenonThreat.set(26, magneticField);
phenomenonThreat.set(31, magneticField);
phenomenonThreat.set(32, mirage);
phenomenonThreat.set(33, mudPuddles);
phenomenonThreat.set(34, mudPuddles);
phenomenonThreat.set(35, nightLights);
phenomenonThreat.set(36, nightLights);
phenomenonThreat.set(41, obelisk);
phenomenonThreat.set(42, pillarsOfLight);
phenomenonThreat.set(43, pillarsOfLight);
phenomenonThreat.set(44, rotHotspot);
phenomenonThreat.set(45, rotHotspot);
phenomenonThreat.set(46, rotHotspot);
phenomenonThreat.set(51, rotWind);
phenomenonThreat.set(52, rotWind);
phenomenonThreat.set(53, sinkhole);
phenomenonThreat.set(54, sinkhole);
phenomenonThreat.set(55, temperatureDrop);
phenomenonThreat.set(56, heatWave);
phenomenonThreat.set(61, unexplodedOrdnance);
phenomenonThreat.set(62, unexplodedOrdnance);
phenomenonThreat.set(63, vacuum);
phenomenonThreat.set(64, zoneSmog);
phenomenonThreat.set(65, zoneSmog);
phenomenonThreat.set(66, zoneSmog);

let threatData = new Map();
threatData.set(1, humanoidThreat);
threatData.set(2, humanoidThreat);
threatData.set(3, monsterThreat);
threatData.set(4, monsterThreat);
threatData.set(5, phenomenonThreat);
threatData.set(6, phenomenonThreat);

//(Know the Zone Modifier: ${threat.knowTheZone})
function createAdditionalDetailsArray(threat) {
  let additionalDetailsArray = [];
  let additionalDetailsArrayFormatted = [];
  if(threat.effect != undefined) {
    additionalDetailsArray.push(threat.effect);
  };
  if(threat.attributes != undefined) {
    additionalDetailsArray.push(threat.attributes);
  };
  if(threat.skills != undefined) {
    additionalDetailsArray.push(threat.skills);
  };
  if(threat.mutations != undefined) {
    additionalDetailsArray.push(threat.mutations);
  };
  if(threat.armor != undefined) {
    additionalDetailsArray.push(threat.armor);
  };
  if(threat.vehicles != undefined) {
    additionalDetailsArray.push(threat.vehicles);
  };
  if(threat.special != undefined) {
    additionalDetailsArray.push(threat.special);
  };
  if(threat.poison != undefined) {
    additionalDetailsArray.push(threat.poison);
  };
  if(threat.pheromones != undefined) {
    additionalDetailsArray.push(threat.pheromones);
  };
  if(threat.swarm != undefined) {
    additionalDetailsArray.push(threat.swarm);
  };
  if(threat.rot != undefined) {
    additionalDetailsArray.push(threat.rot);
  };
  if(threat.drowning != undefined) {
    additionalDetailsArray.push(threat.drowning);
  };
  if(threat.comment != undefined) {
    additionalDetailsArray.push(threat.comment);
  };
  for(var i = 0; i < additionalDetailsArray.length; i++){
    additionalDetailsArrayFormatted.push(`<p>${additionalDetailsArray[i]}</p>`)
  }
  return additionalDetailsArrayFormatted.join("");
}

  function threatTemplate(threat) {
  return `
  <li>
  <p><b>${threat.name.toUpperCase()}:</b> (Know the Zone Modifier: ${threat.knowTheZone})</p>
  <p>${threat.description}</p>
  ${createAdditionalDetailsArray(threat)}
  </li>
  `;
}

export { humanoidThreat, threatData, threatTemplate };
