const episodeData = [
  {
    title: "Episode 83 (Campaign Podcast)",
    description: "As an example, this audio player just plays an mp3 belonging to one of my favorite actual play podcasts, Campaign.",
    audio: "https://media.simplecast.com/episodes/audio/67396/Campaign_83.mp3"
  },
  {
    title: "Ep. 67. Story and Song - Finale, Part One",
    description: "As an example, this audio player just plays an mp3 belonging to another one of my favorite actual play podcasts, The Adventure Zone. Carefule, there's spoilers in this one.",
    audio: "http://traffic.libsyn.com/adventurezone/TheAdventureZone067.mp3"
  },
  {
    title: "MBMBaM 393: Bungrob Squareman",
    description: "As an example, this audio player just plays an mp3 belonging to a different, but still funny, podcasts, My Brother My Brother and Me.",
    audio: "http://traffic.libsyn.com/mbmbam/MyBrotherMyBrotherandMe393.mp3"
  }
];

function episodeTemplate(episode) {
  return `
    <div class="well">
      <h3>${episode.title}</h3>
      <p>${episode.description}</p>
      <audio controls="controls" src="${episode.audio}">
        Your browser does not support the HTML5 audio element.
      </audio>
    </div>
  `;
}

document.getElementById("episode-template").innerHTML = `
   ${episodeData.map(episodeTemplate).join("")}
  `
  ;
