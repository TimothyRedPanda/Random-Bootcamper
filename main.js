const myH1 = document.querySelector("h1");
const unpicked = document.getElementById("unpicked");
const picked = document.getElementById("picked");
const safeCampers = [];
const campersPicked = document.getElementById("campersPicked");
const li = document.createElement("li");
campersPicked.appendChild(li);

const bootCampers = [
	"Frodo",
	"Bilbo",
	"Aragorn",
	"Legolas",
	"Gimli",
	"Samwise",
	"Gandalf",
	"Elrond",
	"Galadriel",
	"Arwen",
	"Thranduil",
	"Thorin",
	"Balin",
	"Bard",
	"Beorn",
	"Radagast",
	"Thrain",
	"Thror",
	"Tom Bombadil",
	// add more boot campers here
];

unpicked.onclick = () => {
	if (bootCampers.length > 0) {
		const index = Math.floor(Math.random() * bootCampers.length);
		const removed = bootCampers.splice(index, 1)[0];
		safeCampers.push(removed);
		myH1.textContent = "Picking from section 1";
		li.textContent = removed;
	} else {
		myH1.textContent = "Section 1 empty";
	}
};

picked.onclick = () => {
	if (safeCampers.length > 0) {
		const index = Math.floor(Math.random() * safeCampers.length);
		const removed = safeCampers.splice(index, 1)[0];
		bootCampers.push(removed);
		myH1.textContent = "Picking from section 2";
		li.textContent = removed;
	} else {
		myH1.textContent = "Section 2 empty";
	}
};

const object = { ...bootCampers };
console.log(object);
