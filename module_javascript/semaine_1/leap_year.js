const year = 2024;

if (year % 400 === 0) {
  console.log("L'année " + year + " est bisextile");
} else if (year % 100 === 0) {
  console.log("L'année " + year + " n'est pas bisextile");
} else if (year % 4 === 0) {
  console.log("L'année " + year + " est bisextile");
} else {
  console.log("L'année " + year + " n'est pas bisextile");
}
