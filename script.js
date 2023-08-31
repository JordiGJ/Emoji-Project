// get elements
const button = document.querySelector("button");
const para = document.querySelector("p");

// API data
const API = "use your own api key here";
const URL = `https://emoji-api.com/emojis?access_key=${API}`;

// functions
async function getEmojis() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const length = data.length;
    const randomNum = Math.floor(Math.random() * length);
    const emoji = data[randomNum];
    button.textContent = emoji.character;
    para.textContent = emoji.unicodeName;
  } catch (err) {
    console.error(err);
  }
}

// eventListeners
button.addEventListener("click", getEmojis);

// init
getEmojis();
