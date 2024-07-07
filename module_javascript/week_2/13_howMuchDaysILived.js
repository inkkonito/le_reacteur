const timeLived = (age) => {
  if (!Number.isInteger(age)) {
    console.log("Veuillez saisir un nombre entier");
  } else {
    const days = age * 365;
    const hours = age * 365 * 24;
    const minutes = age * 365 * 24 * 60;
    console.log("Days : " + days + ", Hours : " + hours + ", Minutes : " + minutes);
  }
};

timeLived(30);
timeLived(37.5);