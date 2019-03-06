console.log('Your JavaScript file is working!');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const dinosaurs = [
    {
        dinoType: 'velociraptor', //this is called a key-value pair
    },
    {
        dinoType: 'pterodactyl',
    },
    {
        dinoType: 'stegosaurus', 
    }
];

const buildDinosaurs = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++) {
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`
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