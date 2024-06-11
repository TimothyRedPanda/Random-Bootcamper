import bootCamper from './data/data.json' with {type: 'json'};

const chosen = [];

const title = document.createElement("h1");
const wrapper = document.getElementById("wrapper")
const randomizer = document.getElementById('randomizer');


function assignRandomBootCamper() {
    const randNumb = Math.floor(Math.random() * bootCamper.length);
    if (bootCamper.length > 0) {
        const chosenBC = bootCamper[randNumb];
        chosen.push(chosenBC);
        bootCamper.splice(randNumb, 1);
        title.textContent = chosenBC;
        console.log(bootCamper);
    } else {
        title.textContent = "All gone...";
    }
}

randomizer.addEventListener('click', assignRandomBootCamper);
wrapper.appendChild(title);
