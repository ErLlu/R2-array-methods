// Años
let years: number[] = [];
for (let year = 2000; year <= 2024; year++) {
  years.push(year);
}

// Words
const words = [
  "confín.",
  "otro",
  "al",
  "conocido",
  "mar",
  "todos",
  "en",
  "Temido,",
  "el",
  "bravura,",
  "su",
  "llaman,",
  "le",
  "pirata",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar,",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa,",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];

console.log(words.reverse().join(" "));

// Notas

let examsScores: number[] = [8, 3, 9, 7, 5];

let inOrderScores = examsScores.slice().sort();

let scoresGreaterThanOrEqualTo5 = [];
for (let index = 0; index < inOrderScores.length; index++) {
  if (inOrderScores[index] >= 5) {
    scoresGreaterThanOrEqualTo5.push(inOrderScores[index]);
  }
}

console.log(scoresGreaterThanOrEqualTo5);

let totalScores = 0;

for (let examScore of examsScores) {
  totalScores += examScore;
}

const scoreAverage = totalScores / examsScores.length;
console.log(`
La nota media es: ${scoreAverage}`);
console.log(`
La nota más alta es: ${Math.max(...examsScores)}

La nota más baja es: ${Math.min(...examsScores)}
`);
