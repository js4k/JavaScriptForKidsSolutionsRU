var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAnimalBodyParts = ["Tail", "Foot", "Fur"]
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomAnimals = ["Fly", "Marmot", "Monkey", "Rat"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * 4)];

var randomInsult = ["Your", randomBodyPart, "is more", randomAdjective, "than a", randomAnimal + "'s", randomAnimalBodyPart].join(" ");
randomInsult;
// "Your Hair is more Smelly than a Rat's Foot"
