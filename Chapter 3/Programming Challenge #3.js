var randomBodyParts = ["глаз", "нос", "череп"];
var randomAnimalBodyParts = ["хвост", "пузо", "рот"];
var randomAdjectives = ["вонючий", "унылый", "дурацкий"];
var randomAnimals = ["жабы", "выдры", "коровы", "мартышки", "крысы"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];

var randomInsult = ["У тебя", randomBodyPart, "ещё более", randomAdjective, "чем", randomAnimalBodyPart, "у", randomAnimal].join(" ") + "!!!";
randomInsult;
// "У тебя череп ещё более дурацкий чем хвост у мартышки!!!"
// Метод .join(" ") менее гибкий, например перед !!! нам не нужен был пробел,
// так что пришлось все равно использовать оператор +
// Но зато метод .join(" ") может вывести содержимое любого массива разделенное пробелами,
// а ведь в массиве могут быть и тысячи и миллионы элементов,
// так что такой способ, хоть и менее гибкий, но гораздо более мощный