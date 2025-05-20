import en from "./en.js";
import pt from "./pt.js";
const lingua = "en";
let modulo;

if (lingua === "en") {
	modulo = en;
} else if (lingua === "pt") {
	modulo = pt;
}

console.log(modulo.dia);
console.log(modulo.tarde);
console.log(modulo.noite);
