// const str = "Hello world !!";

    // const countLetters = (str) => {
    //     const occurence = {}
    //     for (let i=0; i<str.length; i++) {
    //        const character = str[i];
    //         if(occurence[character]) {
    //             occurence[character] +=1
    //         } else {
    //             occurence[character] =1
    //         }
    //     }
    //     return occurence;
    // }

// console.log(countLetters(str)); // Affiche : { H: 1, e: 1, l: 3, o: 2, " ": 2, w: 1, r: 1, d: 1, "!": 1 }

const str = "Hello world !";


const countLetters = (str) => {
    let occurences = {};
    for(let i=0; i<str.length; i++) {
        const character = str[i];
        if (occurences[character]) {
            occurences[character] += 1
        } else {
            occurences[character] = 1
        }
    }
    return occurences
}
console.log(countLetters(str)); 
console.log(countLetters("biarritz"));