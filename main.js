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

const assignments = [
    {
        title: 'product cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assigmentURL: 'www.google.com'
    },
    {
        title: 'monkeys',
        dueDate: '04/01/2019',
        topic: 'JavaScript',
        notes: 'use wizard hat',
        assignmentURL: 'www.wizards.com'
    },
    {
        title: 'kittens',
        dueDate: '05/12/2019',
        topic: 'Python',
        notes: 'use magic wand',
        assignmentURL: 'www.pixies.com'
    },
    {
        title: 'antelopes',
        dueDate: '06/02/2019',
        topic: 'JavaScript',
        notes: 'use endless handkerchief',
        assignmentURL: 'www.mermaids.com'
    },
    {
        title: 'zebras',
        dueDate: '07/03/2019',
        topic: 'PHP',
        notes: 'use invisibility cloak',
        assignmentURL: 'www.potterheads.com'
    }
];

//total of 5 assignments - loop over assignments and make a domstring
//reuse the printToDom function to display the domString

const buildAssCards = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++) {
        domString += `<div class="assignment">`;
        domString += `<h5 class="assignment-title">${assignments[i].title}</h5>`;
        domString += `<div class="due-date"><h3>Due Date: ${assignments[i].dueDate}</h3></div>`;
        domString += `<p>Get the assignment <a href=${assignments[i].assignmentURL}>HERE</a></p>`;
        domString += `<p>Topic: ${assignments[i].topic}</p>`;
        domString += `<p>Notes: ${assignments[i].notes}</p>`;
        domString += `</div>`;
    }
    printToDom('assignment-cards', domString);
};

buildAssCards();

//the initializer below will run anything that needs to load upon page load, 
//usually for things that don't require user action or input
const init = () => {
    buildDinosaurs();
    buildAssCards();
};

init();

//loop over dinosaurs
//build up a domstring
//print the domstring to the dom