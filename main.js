setInterval(() => {
  const randPic = Math.floor(Math.random() * 4) + 1
  document.querySelector("img").src = `./images/ani-${randPic}.jpg`
}, 1500);

//animation 
const rainContainer = document.querySelector("#app");

// background Colors for the raindrop
const background = [
  "linear-gradient(transparent, aqua)",
  "linear-gradient(transparent, red)",
  "linear-gradient(transparent, limegreen)",
  "linear-gradient(transparent, white)",
  "linear-gradient(transparent, yellow)"
];
const amount = 100; // amount of raindops
let i = 0;

// Looping and creating the raindrop then adding to the rainContainer
while (i < amount) {
  //  Creating and Element
  const drop = document.createElement("i");

  //   CSS Properties for raindrop
  const raindropProperties = {
    width: Math.random() * 5 + "px",
    positionX: Math.floor(Math.random() * window.innerWidth) + "px",
    delay: Math.random() * -20 + "s",
    duration: Math.random() * 5 + "s",
    bg: background[Math.floor(Math.random() * background.length)],
    opacity: Math.random() + 0.2
  };

  //   Setting Styles for raindrop
  drop.style.width = raindropProperties.width;
  drop.style.left = raindropProperties.positionX;
  drop.style.animationDelay = raindropProperties.delay;
  drop.style.animationDuration = raindropProperties.duration;
  drop.style.background = raindropProperties.bg;
  drop.style.opacity = raindropProperties.opacity;

  //   Appending the raindrop in the raindrop container
  rainContainer.appendChild(drop);
  i++;
}
