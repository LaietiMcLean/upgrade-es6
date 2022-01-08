window.onload = () => {

/*//Iteración 1
let sum = (a = 10, b = 5) => {
    console.log(a + b);
}

//Iteración 1.1 
sum();

//Iteración 1.2 
sum(3);

//Iteración 1.3
sum(11, 17);

//Iteración 2
//Iteración 2.1
const game = {
    title: 'The last us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
};

    let {title, gender, year} = game; 

    console.log(title);
    console.log("(1) " + gender[0] + " (2) " + gender[1]  + " (3) " + gender[2]);
    console.log(year);

//Iteración 2.2 
const fruits = [
    'Banana', 
    'Strawberry', 
    'Orange'
];

    let fruits1 = fruits[0];
    let fruits2 = fruits[1];
    let fruits3 = fruits[2];

    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);

//Iteración 2.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

    let x = animalFunction();
    console.log(x);

    let {name, race} = animalFunction();
    console.log("name: " + name + ", race: " +  race);

//Iteración 2.4
const car = {
    name1: 'Mazda 6', 
    itv: [2015, 2011, 2020] 
}

    let {name1, itv} = car;
    console.log(name1);
    console.log(itv);

    let year1 = itv[0];
    let year2 = itv[1];
    let year3 = itv[2];
    console.log(year1);
    console.log(year2);
    console.log(year3);

//Iteración 3
//Iteración 3.1
const pointsList = [32, 54, 21, 64, 75, 43]

    console.log(pointsList);
    
    let pointsList2 = [...pointsList];
    console.log(pointsList2);

//Iteración 3.2
const toy = {
    name2: 'Bus laiyiar', 
    date: '20-30-1995', 
    color: 'multicolor'
};

    console.log(toy);

    let toy1 = { ...toy };
    console.log(toy1);

//Iteración 3.3
const xpointsList = [32, 54, 21, 64, 75, 43];
const x1pointsList = [54, 87, 99, 65, 32];

    let pointListsConcat = [...xpointsList, ...x1pointsList];
    console.log(pointListsConcat);

//Iteración 3.4 
const xtoy = {
    name: 'Bus laiyiar', 
    date: '20-30-1995', 
    color: 'multicolor'
};

const toyUpdate = {
    lights: 'rgb', 
    power: ['Volar like a dragon', 'MoonWalk']
}

    let newObj = {...xtoy, ...toyUpdate};
    console.log(newObj);

//Iteración 3.5
const colors = [
    'rojo', 
    'azul', 
    'amarillo', 
    'verde', 
    'naranja'
];

    let colors2 = [...colors];
    colors2.splice(2, 1);

    console.log(colors2);

//Iteración 4
//Iteración 4.1 
const users = [
	{id:1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

    let nombres = users.map(users => users.name);
        console.log(nombres);

//Iteración 4.2
    users.map(function(x) {
        if (x.name[0] === 'A') {
            x.name = 'Anacleto'
        }
            return x
    })

    console.log(users);

//Iteración 4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

    cities.map(function(y) {
        if (y.isVisited == true) {
            console.log(y.name + ": Visitado");
        } else {
            console.log(y.name);
        }
            return cities
    })

//Iteración 5
//Iteración 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

    let mayores = ages.filter(function(x) {
        return x > 18;
    })

    console.log(mayores);

//Iteración 5.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

    let pares = ages2.filter(function(y) {
        return y % 2 == 0;
    })

    console.log(pares);

//Iteración 5.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

    let legends = streamers.filter(function(z) {
        if (z.gameMorePlayed == 'League of Legends') {
            return z;
        } 
    })

    console.log(legends);

//Iteración 5.4 
    let uName = streamers.filter(function(w) {
        if (w.name.includes('u')) {
            return w;
        }
    })

    console.log(uName);

//Iteración 5.5 
    let upLegends = streamers.filter(function(p) {
        if (p.gameMorePlayed.includes('Legend')) {
            if (p.age > 35) {
                p.gameMorePlayed = p.gameMorePlayed.toUpperCase();
            }
            return p 
        } 
    })

    console.log(upLegends);

//Iteraciones 5.6 y 5.7
//Aunque el programa funciona, no he conseguido emplear .filter() ni crear el evento del botón "Filtro"
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


    function selectElement(selector) {
        return document.querySelector(selector);
    }

    function clearResults() {
        selectElement('.search-results').innerHTML = "";
    }

    function getResults() {
        const search = selectElement('.searchbar').value;

        clearResults();
        for(let i = 0; i < streamers.length; i++) {
            if(streamers[i].name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ){ 
                selectElement('.search-results').innerHTML += `
                    <div class="search-results-item">
                        <span class="search-item">${streamers[i].name}</span>
                    </div>
                `;
            }
        }
    }
        selectElement('.searchbar').addEventListener('keyup', getResults);*/

//Iteración 6
//Iteración 6.1
const numbers = [32, 21, 63, 95, 100, 67, 43];

    let found = numbers.find(x => x == 100);
    console.log(found);

//Iteración 6.2
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
]

    let theMovie = movies.find(movies => movies.date == 2010);
    console.log(theMovie.title)

//Iteración 6.3 
/*En la parte final, he utilizado spread operator pero no sé si he cumplido con lo que pedía  
el ejercicio porque no entiendo el planteamiento del enunciado: 
"usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado."*/
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let cucuxmx = aliens.find(cucuxmx => cucuxmx.name.includes('Cucushumushu'));
let porompmp = mutations.find(porompmp => porompmp.name.includes('Porompompero'));

console.log(cucuxmx);
console.log(porompmp);

const concatAlienMutation = {...cucuxmx, ...porompmp}
console.log(concatAlienMutation);

//Iteración 7
//Iteración 7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
    //En scoreS almaceno el array de los 10 score
    let scoreS = exams.map(exams => exams.score);

    let totalScore = scoreS.reduce((acumulador, numero) => acumulador + numero);
        console.log(totalScore); //Devuelve 52

//Iteración 7.2
    let scoresApproved = exams.filter(x => x.score >= 5);
    let approved = scoresApproved.map(scoresApproved => scoresApproved.score);

    let totalScore2 = approved.reduce((acumulador, numero) => acumulador + numero);
        console.log(totalScore2); //Devuelve 42

 //Iteración 7.3       
    let sum = scoreS.reduce((valorAnt, valorAct) => valorAct += valorAnt);
    let average = sum / scoreS.length;

    console.log(average); //Devuele 5.2

//Iteración 8
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]
    //En selectGenders almaceno el array con los 4 JSON que contienen el gender 'RPG'
    let selectGenders = videogames.filter(x => x.genders.includes('RPG'));
    console.log(selectGenders);

    let scoreS2 = selectGenders.map(selectGenders => selectGenders.score);
    let sum2 = scoreS2.reduce((valorAnt, valorAct) => valorAct += valorAnt);
    let average2 = sum2 / scoreS2.length;

    console.log(average2); //Devuelve 7.875 

}