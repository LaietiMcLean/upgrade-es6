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


}