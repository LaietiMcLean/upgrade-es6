window.onload = () => {

//Iteración 1
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

}