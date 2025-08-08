const coordsElement = document.getElementById("coord");
const mapImg = document.getElementById("glitch-map");

const mawCoords = [
  "00.0?!.0??0.0",
  "1?2.48.3?4.??",
  "-76.4!.!!0.00?",
  "███.███.███.███",
  "???",
  "4?4.0.0.!",
  "00°?0'??\" N, 00°??'00\" E",
];

const mapImgs = [
  "./src/img/img-location/the-maw-map-draw.png",
  "./src/img/img-location/the-maw-map-mark.png",
  "./src/img/img-location/the-maw-map.png"
];

function getRandomImg(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

setInterval(() => {
  coordsElement.innerHTML = `<strong>${getRandomImg(mawCoords)}</strong>`;
  mapImg.src = getRandomImg(mapImgs);
}, 1000);
