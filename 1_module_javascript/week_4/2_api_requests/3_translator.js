const translator = require("translate-google");

const txt = "La formation Le Reacteur est trop quali !"; // french to english
translator(txt, { to: 'en'}).then(res => console.log(res))

const translateTxt = (text, originLang,desiredLang) => {
    translator(text, { from: originLang, to: desiredLang})
    .then(res => console.log(res))
    .catch(err => console.error(err));
}
translateTxt("1/JavaScript is the best programming langage in the universe.", "en", "pt");
translateTxt("2/La vision sans l'action est un rêve. L'action sans vision est un cauchemar.", "fr", "ja");
translateTxt("3/Pero amo un burro que me lleva, que caballo que me derriba.", "es", "ru");