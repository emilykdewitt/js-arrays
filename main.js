console.log('Your JavaScript file is working!');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const dinosaurs = [
    {
        dinoType: 'velociraptor', //this is called a key-value pair
        name: 'Rosco',
    },
    {
        dinoType: 'pterodactyl',
        name: 'Terrence',
    },
    {
        dinoType: 'stegosaurus', 
        name: 'Nancy',
    }
];

const buildDinosaurs = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++) {
        domString += `<div class="dinosaur">`;
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString += `<p>${dinosaurs[i].name}`;
        domString += `</div>`;
    }
    printToDom('dino-barn', domString);
};

//the initializer below will run anything that needs to load upon page load, 
//usually for things that don't require user action or input
const init = () => {
    buildDinosaurs();
};

init();

//loop over dinosaurs
//build up a domstring
//print the domstring to the dom