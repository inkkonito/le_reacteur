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

const yearJuke = 2000;

if (yearJuke % 400 === 0) { // test if is a 400 multiplier => true = not bisextil
  console.log(yearJuke + " is bisextil");
} else if (yearJuke % 100 === 0 ) { // test if is not a 100 multiplier => true = not bisextil
  console.log(yearJuke + " is not bisextil") 
} else if (yearJuke % 4 === 0) { // test if is a 4 multiplier => true = bisextil
  console.log(yearJuke + " is bisextil");
} else { // not matching all true conditions => not bisextil
  console.log(yearJuke + " is not bisextil") 
}
