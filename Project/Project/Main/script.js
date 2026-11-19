function getRandomCharacter() {
  const races = [
    "Dwarf",
    "Elf",
    "Halfling",
    "Human",
    "Dragonborn",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Tiefling",
  ];
  const backgrounds = [
    "Acolyte",
    "Charlatan",
    "Criminal",
    "Entertainer",
    "Folk Hero",
    "Guild Artisan",
    "Hermit",
    "Noble",
    "Outlander",
    "Sage",
    "Sailor",
    "Soldier",
    "Urchin",
  ];
  const classes = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];

  const randomRace = races[Math.floor(Math.random() * races.length)];
  const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const randomClass = classes[Math.floor(Math.random() * classes.length)];

  document.getElementById("race-select").value = randomRace;
  document.getElementById("Back-select").value = randomBackground;
  document.getElementById("class-select").value = randomClass;
  getRandomStats();
}

document
  .getElementById("random-character-btn")
  .addEventListener("click", getRandomCharacter);

function getRandomStats() {
  const stats = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  stats.forEach((stat) => {
    const randomValue = Math.floor(Math.random() * 16) + 3;
    document.querySelector(`input[name="${stat}"]`).value = randomValue;
  });
}

document
  .getElementById("random-character-stats")
  .addEventListener("click", getRandomStats);

function myFunction() {
  let d4 = Math.floor(Math.random() * 4) + 1;
  document.getElementById("heading1").innerHTML = d4;
}

function myFunction2() {
  let d6 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("heading2").innerHTML = d6;
}

function myFunction3() {
  let d8 = Math.floor(Math.random() * 8) + 1;
  document.getElementById("heading3").innerHTML = d8;
}

function myFunction4() {
  let d10 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("heading4").innerHTML = d10;
}

function myFunction5() {
  let d12 = Math.floor(Math.random() * 12) + 1;
  document.getElementById("heading5").innerHTML = d12;
}

function myFunction6() {
  let d20 = Math.floor(Math.random() * 20) + 1;
  document.getElementById("heading6").innerHTML = d20;
}

function myFunction7() {
  let d100 = Math.floor(Math.random() * 100) + 1;
  document.getElementById("heading7").innerHTML = d100;
}
