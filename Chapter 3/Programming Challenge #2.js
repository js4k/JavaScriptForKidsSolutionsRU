var randomBodyParts = ["глаз", "нос", "череп"];
var randomAnimalBodyParts = ["хвост", "пузо", "рот"];
var randomAdjectives = ["вонючий", "унылый", "дурацкий"];
var randomAnimals = ["жабы", "выдры", "коровы", "мартышки", "крысы"];

// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Выбор случайной части тела животного из массива randomAnimalBodyParts:
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];

// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Выбор случайного животного из массива randomAnimals:
var randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];

// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " ещё более " + randomAdjective + " чем " + randomAnimalBodyPart + " у " + randomAnimal + "!!!";
randomInsult;
// "У тебя череп ещё более дурацкий чем хвост у мартышки!!!"
